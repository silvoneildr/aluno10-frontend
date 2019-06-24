import React from 'react';
import Login from 'Pages/Login';
import { render } from 'react-testing-library';

describe('Login', () => {
  it('should render correctly', () => {
    const { container } = render(<Login />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
