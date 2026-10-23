export interface Language {
  id: string;
  title: string;
}

export const supportedLanguages: Language[] = [
  { id: 'en', title: 'English' },
  { id: 'uk', title: 'Ukrainian' },
];

export const defaultLanguage: string = 'en';
