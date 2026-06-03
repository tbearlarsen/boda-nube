export const languages = {
  en: 'English',
  es: 'Español',
  da: 'Dansk',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.the-day': 'The Day',
    'nav.travel': 'Travel & Accommodation',
    'nav.rsvp': 'RSVP',
    'nav.faq': 'FAQ',
    'nav.our-story': 'Our Story',
    'nav.gift-registry': 'Gift Registry',
    'lang.select': 'Choose your language',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.the-day': 'El Día',
    'nav.travel': 'Viaje y Alojamiento',
    'nav.rsvp': 'Confirmación',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.our-story': 'Nuestra Historia',
    'nav.gift-registry': 'Lista de Regalos',
    'lang.select': 'Elige tu idioma',
  },
  da: {
    'nav.home': 'Hjem',
    'nav.the-day': 'Dagen',
    'nav.travel': 'Rejse og Overnatning',
    'nav.rsvp': 'Tilmelding',
    'nav.faq': 'Spørgsmål',
    'nav.our-story': 'Vores Historie',
    'nav.gift-registry': 'Ønskeliste',
    'lang.select': 'Vælg dit sprog',
  },
} as const;

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
