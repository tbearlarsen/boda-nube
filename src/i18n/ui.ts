export const languages = {
  en: 'English',
  es: 'Español',
  da: 'Dansk',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.itinerary': 'Itinerary',
    'nav.venue': 'Venue',
    'nav.accommodation': 'Accommodation',
    'nav.traditions': 'Traditions',
    'nav.rsvp': 'RSVP',
    'lang.select': 'Choose your language',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.itinerary': 'Itinerario',
    'nav.venue': 'El Lugar',
    'nav.accommodation': 'Alojamiento',
    'nav.traditions': 'Tradiciones',
    'nav.rsvp': 'Confirmación',
    'lang.select': 'Elige tu idioma',
  },
  da: {
    'nav.home': 'Hjem',
    'nav.itinerary': 'Program',
    'nav.venue': 'Stedet',
    'nav.accommodation': 'Overnatning',
    'nav.traditions': 'Traditioner',
    'nav.rsvp': 'Tilmelding',
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
