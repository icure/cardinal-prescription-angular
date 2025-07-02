import { SamText } from '@icure/cardinal-be-sam-sdk';

export interface CertificateValidationResultType {
  status: boolean;
  error?: SamText;
}
