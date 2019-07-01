import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
// import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import Login from 'Pages/Login';

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
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
