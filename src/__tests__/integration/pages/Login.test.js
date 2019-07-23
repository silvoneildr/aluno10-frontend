import React from 'react';
import { Provider } from 'react-redux';
import Login from 'Pages/Login';
import { render, fireEvent } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);

describe('Login', () => {
  const initialState = {
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

  const store = mockStore(initialState);

  it('should handle fields and show errors correctly', () => {
    const { getByPlaceholderText, queryByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const emailErrorMessage = 'E-mail is required.';
    const passwordErrorMessage = 'Password is required.';

    const email = getByPlaceholderText('E-mail');
    const password = getByPlaceholderText('Password');

    // expect that email and password messages errors are not in the document
    expect(queryByText(emailErrorMessage)).toBeNull();
    expect(queryByText(passwordErrorMessage)).toBeNull();

    // insert email and password for login
    fireEvent.change(email, {
      target: { value: 'wagnerdutra1010@gmail.com', name: 'email' }
    });
    fireEvent.change(password, {
      target: { value: '123456', name: 'password' }
    });

    // expect that email and password fields has the values inserted
    expect(email.value).toBe('wagnerdutra1010@gmail.com');
    expect(password.value).toBe('123456');

    // clean email and password fields
    fireEvent.change(email, {
      target: { value: '', name: 'email' }
    });
    fireEvent.change(password, {
      target: { value: '', name: 'password' }
    });

    // expect that fields are emptys and the error messages exists
    expect(email.value).toBe('');
    expect(password.value).toBe('');
    expect(queryByText(emailErrorMessage)).toBeInTheDocument();
    expect(queryByText(passwordErrorMessage)).toBeInTheDocument();
  });
});
