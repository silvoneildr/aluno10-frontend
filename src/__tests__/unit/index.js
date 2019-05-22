import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from 'Root/styles/theme';

function wrapWithTheme(fn, children, options) {
  const wrapper = fn(<ThemeProvider theme={theme}>{children}</ThemeProvider>, options);

  return wrapper[fn.name]({
    context: wrapper.instance().getChildContext()
  });
}

export function shallowWithTheme(...args) {
  return wrapWithTheme(shallow, ...args);
}

export function mountWithTheme(...args) {
  return wrapWithTheme(mount, args);
}
