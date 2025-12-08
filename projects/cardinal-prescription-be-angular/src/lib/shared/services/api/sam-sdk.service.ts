import { Injectable } from '@angular/core';
import {
  type Amp,
  Nmp,
  type PaginatedListIterator,
  type SamV2Api,
  VmpGroup,
  type SamVersion,
} from '@icure/cardinal-be-sam-sdk';

@Injectable({
  providedIn: 'root',
})
export class SamSdkService {
  private sdk: SamV2Api | null = null;

  setSdk(instance: SamV2Api) {
    this.sdk = instance;
  }

  async searchMedications(
    lang: string,
    query: string | null
  ): Promise<
    [
      PaginatedListIterator<Amp>,
      PaginatedListIterator<VmpGroup>,
      PaginatedListIterator<Nmp>,
    ]
  > {
    if (!this.sdk) throw new Error('SDK not initialized');
    if (!query) throw new Error('Query is not found');
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

  async loadCheapAlternativeMedications(
    vmpGroupCode: string,
  ): Promise<
    PaginatedListIterator<Amp>
  > {
    if (!this.sdk) throw new Error('SDK not initialized');
    if (!vmpGroupCode) throw new Error('Query is not found');
    try {
      return await this.sdk.findPaginatedAmpsByVmpCode(vmpGroupCode);
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
