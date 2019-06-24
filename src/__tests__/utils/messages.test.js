import { flattenMessages } from '../../utils/index';
import messages from '../../utils/messages';

describe('Test messages from en-US', () => {
  const locale = 'en-US';
  it('Should have 1 header message', () => {
    const headerMessage = 'Students management application.';
    expect(flattenMessages(messages[locale]).header).toEqual(headerMessage);
  });
});

describe('Test messages from pt-BR', () => {
  const locale = 'pt-BR';
  it('Should have 1 header message', () => {
    const headerMessage = 'Aplicativo para gerenciamento de alunos.';
    expect(flattenMessages(messages[locale]).header).toEqual(headerMessage);
  });
});
