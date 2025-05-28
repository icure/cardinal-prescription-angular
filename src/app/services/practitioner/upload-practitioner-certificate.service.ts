import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadPractitionerCertificateService {
  constructor() {}

  // Open IndexedDB database
  async openCertificatesDatabase(): Promise<IDBDatabase> {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('CertificateStore', 1);

      request.onupgradeneeded = event => {
        const database = (event.target as IDBOpenDBRequest).result;
        database.createObjectStore('certificates', { keyPath: 'id' });
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Load certificate information from IndexedDB
  async loadCertificateInformation(
    db: IDBDatabase,
    id: string
  ): Promise<{
    salt: ArrayBuffer;
    iv: ArrayBuffer;
    encryptedCertificate: ArrayBuffer;
  }> {
    const transaction = db.transaction('certificates', 'readonly');
    const store = transaction.objectStore('certificates');

    const request = store.get(id);
    const record = await new Promise<any>((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    if (!record) {
      throw new Error('Record not found');
    }

    return {
      salt: new Uint8Array(record.salt).buffer,
      iv: new Uint8Array(record.iv).buffer,
      encryptedCertificate: new Uint8Array(record.encryptedCertificate).buffer,
    };
  }

  // Load and decrypt certificate using password
  async loadAndDecryptCertificate(
    password: string,
    id: string
  ): Promise<ArrayBuffer | undefined> {
    const db = await this.openCertificatesDatabase();
    if (!db) {
      console.error('Database not initialized');
      return undefined;
    }

    const { salt, iv, encryptedCertificate } =
      await this.loadCertificateInformation(db, id);

    // Derive a key from the password using PBKDF2
    const passwordKey = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(password),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );

    const decryptionKey = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: new Uint8Array(salt),
        iterations: 100000,
        hash: 'SHA-256',
      },
      passwordKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );

    // Decrypt the certificate
    return await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: new Uint8Array(iv) },
      decryptionKey,
      new Uint8Array(encryptedCertificate)
    );
  }

  // Upload and encrypt certificate to IndexedDB
  async uploadAndEncrypt(
    db: IDBDatabase,
    id: string,
    passphrase: string,
    certificate: ArrayBuffer
  ): Promise<string> {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));

    // Derive a key from the password using PBKDF2
    const passwordKey = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(passphrase),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );

    const encryptionKey = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      passwordKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt']
    );

    return new Promise<string>(async (resolve, reject) => {
      try {
        // Ensure the database is available
        if (!db) {
          console.error('IndexedDB instance is not available.');
        }

        // Encrypt the certificate (outside the transaction to avoid delays)
        const encryptedCertificate = await crypto.subtle.encrypt(
          { name: 'AES-GCM', iv },
          encryptionKey,
          certificate
        );

        // Start a transaction
        const transaction = db.transaction('certificates', 'readwrite');
        const store = transaction.objectStore('certificates');

        // Convert the encrypted certificate and other data to a storable format
        const record = {
          id: id,
          salt: Array.from(salt), // Convert TypedArray to a normal array
          iv: Array.from(iv),
          encryptedCertificate: Array.from(
            new Uint8Array(encryptedCertificate)
          ), // Convert ArrayBuffer to an array
        };

        // Use a single transaction to perform all operations
        const request = store.get(id);

        request.onsuccess = () => {
          if (request.result) {
            // Update the existing record
            const putRequest = store.put(record);
            putRequest.onsuccess = () => {
              console.log(`Record with ID ${id} successfully updated.`);
              resolve(id);
            };
            putRequest.onerror = () => {
              console.error(
                `Error updating record with ID ${id}:`,
                putRequest.error
              );
              reject(putRequest.error);
            };
          } else {
            // Add a new record
            const addRequest = store.add(record);
            addRequest.onsuccess = () => {
              console.log(`Record with ID ${id} successfully added.`);
              resolve(id);
            };
            addRequest.onerror = () => {
              console.error(
                `Error adding record with ID ${id}:`,
                addRequest.error
              );
              reject(addRequest.error);
            };
          }
        };

        request.onerror = () => {
          console.error(
            `Error retrieving record with ID ${id}:`,
            request.error
          );
          reject(request.error);
        };

        // Transaction completion handlers
        transaction.oncomplete = () => {
          console.log('Transaction completed successfully.');
        };

        transaction.onerror = () => {
          console.error('Transaction failed:', transaction.error);
        };

        transaction.onabort = () => {
          console.error('Transaction aborted.');
        };
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });
  }
}
