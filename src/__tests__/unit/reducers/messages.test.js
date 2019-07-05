import messages from '../../../reducers/messages';
import { GET_MESSAGES } from '../../../reducers/types';

const INITIAL_STATE = {
  locale: 'en-US',
  messages: {
    login: {
      placeholderEmail: 'E-mail',
      placeholderPassword: 'Password',
      emailError: 'E-mail is required.',
      passwordError: 'Password is required.',
      buttonLogin: 'Login'
    }
  }
};

describe('Reducer Messages', () => {
  test('should render messages with type GET_MESSAGES', () => {
    const msg = messages(INITIAL_STATE, { type: GET_MESSAGES });
    expect(msg).toEqual(INITIAL_STATE);
  });

  test('should render messages without type', () => {
    const msg = messages(INITIAL_STATE, '');
    expect(msg).toEqual(INITIAL_STATE);
  });
});
