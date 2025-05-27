import { Injectable } from '@angular/core';
import {
  type Amp,
  CardinalBeSamSdk,
  Credentials,
  Nmp,
  type PaginatedListIterator,
  type SamV2Api,
  VmpGroup,
  type SamVersion,
} from '@icure/cardinal-be-sam';

@Injectable({
  providedIn: 'root',
})
export class SamSdkService {
  private sdk: SamV2Api | null = null;

  // To create new Credentials.UsernamePassword(), follow these steps:
  // 1. Go to https://cockpit.icure.dev/ — the management platform for Cardinal.
  // 2. Register and log in.
  // 3. Create a solution, then a database, and then a healthcare professional (HCP).
  // 4. For this HCP, generate an Active Authentication Token.
  // 5. Use the HCP's email address as the username, and the token as the password.

  async initialize(): Promise<void> {
    if (!this.sdk) {
      try {
        const instance = await CardinalBeSamSdk.initialize(
          undefined,
          'https://nightly.icure.cloud',
          new Credentials.UsernamePassword(
            'larisa.shashuk+medicationsTest@gmail.com',
            '5aa9d0f0-2fab-4f9f-9f6a-5d8244280873'
          )
        );
        this.sdk = instance.sam;
      } catch (error) {
        console.error('Error initializing SDK:', error);
      }
    }
  }

  async searchMedications(
    lang: string,
    query: string
  ): Promise<
    [
      PaginatedListIterator<Amp>,
      PaginatedListIterator<VmpGroup>,
      PaginatedListIterator<Nmp>,
    ]
  > {
    if (!this.sdk) throw new Error('SDK not initialized');
    try {
      return await Promise.all([
        this.sdk.findPaginatedAmpsByLabel(lang, query),
        this.sdk.findPaginatedVmpGroupsByLabel(lang, query),
        this.sdk.findPaginatedNmpsByLabel(lang, query),
      ]);
    } catch (error) {
      console.error('Error searching medications:', error);
      throw error;
    }
  }

  async getSamVersion(): Promise<SamVersion | undefined> {
    if (!this.sdk) throw new Error('SDK not initialized');
    try {
      return await this.sdk.getSamVersion();
    } catch (error) {
      console.error('Error getting SAM version:', error);
      return undefined;
    }
  }
}
