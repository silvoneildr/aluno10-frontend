import React from 'react';
import Login from 'Pages/Login';
import { render, fireEvent, cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('Login', () => {
  it('should handle fields and show errors correctly', () => {
    const { getByPlaceholderText, queryAllByText } = render(<Login />);
    const email = getByPlaceholderText('E-mail');
    const password = getByPlaceholderText('Senha');

    fireEvent.change(email, {
      target: { value: 'wagnerdutra1010@gmail.com', name: 'email' }
    });
    fireEvent.change(password, {
      target: { value: '123456', name: 'password' }
    });

    expect(email.value).toBe('wagnerdutra1010@gmail.com');
    expect(password.value).toBe('123456');

    fireEvent.change(email, {
      target: { value: '', name: 'email' }
    });
    fireEvent.change(password, {
      target: { value: '', name: 'password' }
    });

    const emailError = queryAllByText('E-mail obrigatório');
    const passwordError = queryAllByText('Senha obrigatória');

    expect(email.value).toBe('');
    expect(password.value).toBe('');
    expect(emailError).toBeTruthy();
    expect(passwordError).toBeTruthy();
  });
});
