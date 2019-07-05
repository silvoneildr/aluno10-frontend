import { ptBR } from './pt-BR';
import { enUS } from './en-US';

export function getMessagesByLocale(locale) {
  switch (locale) {
    case 'en-US':
      return enUS;
    case 'pt-BR':
      return ptBR;
    default:
      return enUS;
  }
}
