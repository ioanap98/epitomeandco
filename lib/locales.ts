import { ReactNode } from 'react';

export type Locale = 'en-GB' | 'ro' | 'en';

export interface LocaleContextType {
  locale: Locale;
  t: (key: string) => string;
}

export const localeLabels: Record<Locale, string> = {
  'en-GB': 'English (UK)',
  'ro': 'Română',
  'en': 'English',
};

// Translation keys for future expansion
export const translations: Record<Locale, Record<string, string>> = {
  'en-GB': {
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Ioana Web Studio',
    'hero.subtitle': 'Portfolio Websites for Small Brands & Creators',
  },
  'ro': {
    'nav.portfolio': 'Portofoliu',
    'nav.services': 'Servicii',
    'nav.about': 'Despre',
    'nav.contact': 'Contact',
    'hero.title': 'Ioana Web Studio',
    'hero.subtitle': 'Site-uri Portfolio pentru Mărcile Mici & Creatori',
  },
  'en': {
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Ioana Web Studio',
    'hero.subtitle': 'Portfolio Websites for Small Brands & Creators',
  },
};

export function getTranslation(locale: Locale, key: string): string {
  return translations[locale]?.[key] || translations['en-GB']?.[key] || key;
}
