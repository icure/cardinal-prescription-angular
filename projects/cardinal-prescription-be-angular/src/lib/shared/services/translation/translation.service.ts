// translation.service.ts
import { Injectable } from '@angular/core';
import { appTranslations } from '../../../internal/translations';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private currentLang: keyof typeof appTranslations = 'fr';

  setLanguage(lang: keyof typeof appTranslations) {
    this.currentLang = lang;
  }

  getCurrentLanguage(): keyof typeof appTranslations {
    return this.currentLang;
  }

  translate(path: string): string {
    const keys = path.split('.');
    let value = appTranslations[this.currentLang] as any;

    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) return `[${path}]`;
    }

    return value;
  }
}
