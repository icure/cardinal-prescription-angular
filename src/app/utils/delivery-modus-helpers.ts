import { DeliveryModusSpecificationCodeType } from '../types';

export function getDeliveryModusLabel(
  code: DeliveryModusSpecificationCodeType | undefined,
  translate: (key: string) => string
): string {
  if (!code) return '';
  return translate(`deliveryModusHelper.specifications.${code}`) || code;
}
