import { Injectable } from '@angular/core';
import { normalizeForSort } from '../../utils/string-helpers';

export interface NamedItem {
  title: string;
}

export type FetchMissingCallback = (
  fromName: string,
  toName?: string
) => Promise<NamedItem[]>;

function isSorted(items: NamedItem[]): boolean {
  for (let i = 0; i < items.length - 1; i++) {
    if (normalizeForSort(items[i].title) > normalizeForSort(items[i + 1].title)) {
      return false;
    }
  }
  return true;
}

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

    /**
     * Utility function to load items at pointer position for array k.
     * Loads items from lastPushedName up to toName (if provided).
     */
    async function loadItemsAtPointer(
      k: number,
      toName: string | undefined
    ): Promise<void> {
      const p = pointers[k];
      if (p >= arrays[k].length) {
        const newItems = await fetchMissingCallbacks[k](lastPushedName, toName);

        if (!isSorted(newItems)) {
          throw new Error(`Fetched items for array ${k} are not sorted.`);
        }

        if (newItems.length > 0) {
          arrays[k].splice(p, 0, ...newItems);
        }
      }
    }

    async function indexOfSmallestFront(): Promise<number | null> {
      let smallestName: string | undefined = undefined;

      // First pass: identify the smallest front element among already-loaded items
      for (let k = 0; k < arrays.length; k++) {
        const p = pointers[k];
        if (p < arrays[k].length) {
          const candidateName = normalizeForSort(arrays[k][p].title);
          if (smallestName === undefined || candidateName < smallestName) {
            smallestName = candidateName;
          }
        }
      }

      // Second pass: load missing items, but only up to the smallest known element
      // This ensures we don't load unnecessarily large data when we only need to find the smallest
      for (let k = 0; k < arrays.length; k++) {
        await loadItemsAtPointer(k, smallestName);
      }

      // Third pass: find the actual smallest front element now that all arrays are loaded
      let smallestIndex: number | null = null;
      smallestName = undefined;

      for (let k = 0; k < arrays.length; k++) {
        const p = pointers[k];
        if (p < arrays[k].length) {
          const candidateName = normalizeForSort(arrays[k][p].title);
          if (smallestName === undefined || candidateName < smallestName) {
            smallestIndex = k;
            smallestName = candidateName;
          }
        }
      }
      return smallestIndex;
    }

    while (result.length < limit) {
      const si = await indexOfSmallestFront();
      if (si === null) break;

      let item = arrays[si][pointers[si]];

      result.push(item);
      lastPushedName = normalizeForSort(item.title);
      pointers[si]++;
    }

    return [result, pointers];
  }
}
