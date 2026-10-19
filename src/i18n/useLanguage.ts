import { useContext } from 'react';
import { LanguageContext } from './context';
import { strings } from './strings';

export function useLanguage() {
  const { lang, setLang } = useContext(LanguageContext);
  return { lang, setLang, t: strings[lang] };
}
