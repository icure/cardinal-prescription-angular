import { DeliveryModusSpecificationCodeType } from '../types';

export const deliveryModusSpecifications: {
  [code in DeliveryModusSpecificationCodeType]: {
    en: string;
    fr: string;
    nl: string;
    de: string;
  };
} = {
  Sp: {
    en: 'Prescription by specialist',
    fr: 'Prescription par un médecin-spécialiste',
    nl: 'Voorschrift door een geneesheer-specialist',
    de: 'Verschreibung von einem Facharzt',
  },
  Sp1: {
    en: 'First prescription by specialist, follow-up prescription by general practitioner',
    fr: 'Première prescription par un médecin-spécialiste, prescription de suivi par un médecin généraliste',
    nl: 'Eerste voorschrift door een geneesheer-specialist, vervolgoorschrift door huisarts',
    de: 'Erste Verschreibung von einem Facharzt, Folgeverordnung vom Hausarzt',
  },
  'Sp/S': {
    en: 'Prescription by specialist',
    fr: 'Prescription par un médecin-spécialiste',
    nl: 'Voorschrift door een geneesheer-specialist',
    de: 'Verschreibung von einem Facharzt',
  },
  'Sp1/S': {
    en: 'First prescription by specialist, follow-up prescription by general practitioner',
    fr: 'Première prescription par un médecin-spécialiste, prescription de suivi par un médecin généraliste',
    nl: 'Eerste voorschrift door een geneesheer-specialist, vervolgoorschrift door huisarts',
    de: 'Erste Verschreibung von einem Facharzt, Folgeverordnung vom Hausarzt',
  },
  'IMP/Sp': {
    en: 'Prescription by specialist',
    fr: 'Prescription par un médecin-spécialiste',
    nl: 'Voorschrift door een geneesheer-specialist',
    de: 'Verschreibung von einem Facharzt',
  },
  'IMP/Sp1': {
    en: 'First prescription by specialist, follow-up prescription by general practitioner',
    fr: 'Première prescription par un médecin-spécialiste, prescription de suivi par un médecin généraliste',
    nl: 'Eerste voorschrift door een geneesheer-specialist, vervolgoorschrift door huisarts',
    de: 'Erste Verschreibung von einem Facharzt, Folgeverordnung vom Hausarzt',
  },
};
