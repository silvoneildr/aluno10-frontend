import React from 'react';
import Login from 'Pages/Login';
import { render, fireEvent } from 'react-testing-library';

describe('Login', () => {
  it('should handle fields and show errors correctly', () => {
    const { getByPlaceholderText, queryAllByText } = render(<Login />);
    const email = getByPlaceholderText('E-mail');
    const password = getByPlaceholderText('Senha');

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

    // fiend email and password error messages
    const emailError = queryAllByText('E-mail obrigatório');
    const passwordError = queryAllByText('Senha obrigatória');

    // expect that fields are emptys and the error messages exists
    expect(email.value).toBe('');
    expect(password.value).toBe('');
    expect(emailError).toBeTruthy();
    expect(passwordError).toBeTruthy();
  });
});
