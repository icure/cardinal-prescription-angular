import { Injectable } from '@angular/core';

export interface NamedItem {
  title: string;
}

export type FetchMissingCallback = (
  fromName: string,
  toName?: string
) => Promise<NamedItem[]>;

/**
 * Service to merge multiple sorted, partially loaded arrays of NamedItems.
 */
@Injectable({
  providedIn: 'root',
})
export class MergeLazySortedNamedItemsService {
  async mergeLazySortedNamedItems(
    limit: number,
    arrays: NamedItem[][],
    fetchMissingCallbacks: FetchMissingCallback[]
  ): Promise<[NamedItem[], number[]]> {
    if (arrays.length !== fetchMissingCallbacks.length) {
      throw new Error('Each array must have a corresponding fetch callback.');
    }

    const result: NamedItem[] = [];
    const pointers = arrays.map(() => 0);
    let lastPushedName = '';

    async function drainArrayUpTo(
      k: number,
      limitName: string | null,
      limit: number
    ): Promise<void> {
      const arr = arrays[k];
      let p = pointers[k];
      const fetchMissing = fetchMissingCallbacks[k];

      while (result.length < limit) {
        if (p < arr.length) {
          const itemName = arr[p].title.toLowerCase();
          if (limitName === null || itemName < limitName) {
            result.push(arr[p]);
            lastPushedName = itemName;
            p++;
          } else {
            break;
          }
        } else {
          const upper = limitName === null ? undefined : limitName;
          const newItems = await fetchMissing(lastPushedName, upper);

          if (newItems.length === 0) break;
          arr.splice(p, 0, ...newItems);
        }
      }

      pointers[k] = p;
    }

    function indexOfSmallestFront(): number | null {
      let smallestIndex: number | null = null;
      let smallestName = '';

      for (let k = 0; k < arrays.length; k++) {
        const p = pointers[k];
        if (p < arrays[k].length) {
          const candidateName = arrays[k][p].title.toLowerCase();
          if (smallestIndex === null || candidateName < smallestName) {
            smallestIndex = k;
            smallestName = candidateName;
          }
        }
      }
      return smallestIndex;
    }

    while (result.length < limit) {
      const si = indexOfSmallestFront();
      if (si === null) break;

      const nextName = arrays[si][pointers[si]].title.toLowerCase();

      for (let k = 0; k < arrays.length; k++) {
        await drainArrayUpTo(k, nextName, limit);
      }

      if (result.length < limit && pointers[si] < arrays[si].length) {
        const item = arrays[si][pointers[si]];
        if (item.title.toLowerCase() === nextName) {
          result.push(item);
          lastPushedName = nextName;
          pointers[si]++;
        }
      }
    }

    if (result.length < limit) {
      for (let k = 0; k < arrays.length; k++) {
        await drainArrayUpTo(k, null, limit);
      }
    }

    return [result, pointers];
  }
}
