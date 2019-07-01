import reducers from '../../../reducers';

test('should render messages from en-US locale', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual({
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
  });
});
