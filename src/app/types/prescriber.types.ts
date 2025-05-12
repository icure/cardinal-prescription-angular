import { Address } from '@icure/be-fhc-api';

export interface Prescriber {
  lastName: string;
  firstName: string;
  ssin: string;
  nihii: string;
  addresses: Address[];
}
