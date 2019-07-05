import { getMessagesByLocale } from '../../../locale';
import { ptBR } from '../../../locale/pt-BR';
import { enUS } from '../../../locale/en-US';

describe('Locale', () => {
  it('should have messages from locale en-US to login page', () => {
    const result = getMessagesByLocale('en-US');
    expect(result).toEqual(enUS);
  });

  it('should have messages from locale pt-BR to login page', () => {
    const result = getMessagesByLocale('pt-BR');
    expect(result).toEqual(ptBR);
  });

  it('should have messages without locale to login page', () => {
    const result = getMessagesByLocale('');
    expect(result).toEqual(enUS);
  });
});
