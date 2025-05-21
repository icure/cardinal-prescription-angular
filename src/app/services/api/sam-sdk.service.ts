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

  async initialize(): Promise<void> {
    if (!this.sdk) {
      try {
        const instance = await CardinalBeSamSdk.initialize(
          undefined,
          'https://nightly.icure.cloud',
          new Credentials.UsernamePassword(
            'larisa.shashuk+medicationsTest@gmail.com',
            '75b00167-a1e3-4825-b262-396617c71cab'
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
