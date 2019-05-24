import React from 'react';
import Login from 'Pages/Login';
import { render, fireEvent, cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('Login', () => {
  it('should render login element correctly', () => {
    const { getByPlaceholderText } = render(<Login />);
    const input = getByPlaceholderText('E-mail');
    fireEvent.change(input, {
      target: { value: 'wagnerdutra1010@gmail.com', name: 'email' }
    });
    expect(input.value).toBe('wagnerdutra1010@gmail.com');
  });
});
