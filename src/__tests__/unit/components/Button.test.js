import React from 'react';
import Button from 'Components/Button';
import theme from 'Root/styles/theme';
import { shallow } from 'enzyme';
import { render, cleanup } from 'react-testing-library';

let wrapper;

afterEach(() => {
  if (wrapper) {
    wrapper.unmount();
  }
  cleanup();
});

describe('Button', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Button handleClick={() => {}} theme={theme}>
        Hello World
      </Button>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should handle click correctly', () => {
    const click = jest.fn();
    wrapper = shallow(
      <Button handleClick={click} theme={theme}>
        Hello World
      </Button>
    );

    wrapper.props().onClick();
    expect(click).toHaveBeenCalled();
  });
});
