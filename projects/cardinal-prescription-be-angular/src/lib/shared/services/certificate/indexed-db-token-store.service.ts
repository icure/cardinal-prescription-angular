import { Injectable } from '@angular/core';
import { TokenStore } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class IndexedDbTokenStoreService {
  private readonly dbName = 'certificate-store';
  private readonly storeName = 'certificates';

  async open(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  getTokenStore(db: IDBDatabase): TokenStore {
    return {
      get: (key: string) => {
        return new Promise((resolve, reject) => {
          const tx = db.transaction(this.storeName, 'readonly');
          const store = tx.objectStore(this.storeName);
          const request = store.get(key);
          request.onsuccess = () => {
            request.result
              ? resolve(request.result.value)
              : reject(new Error(`No value for key: ${key}`));
          };
          request.onerror = () => reject(request.error);
        });
      },
      put: (key: string, value: string) => {
        return new Promise((resolve, reject) => {
          const tx = db.transaction(this.storeName, 'readwrite');
          const store = tx.objectStore(this.storeName);
          const request = store.put({ id: key, value });
          request.onsuccess = () => resolve(value);
          request.onerror = () => reject(request.error);
        });
      },
    };
  }
}
