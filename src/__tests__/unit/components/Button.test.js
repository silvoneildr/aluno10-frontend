import React from 'react';
import Button from 'Components/Button';
import theme from 'Root/styles/theme';
import { shallow, mount } from 'enzyme';

describe('Button', () => {
  it('should render button correctly', () => {
    const wrapper = mount(
      <Button onClick={() => {}} theme={theme}>
        Hello World
      </Button>
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  it('should render primary button correctly', () => {
    const click = jest.fn();
    const wrapper = mount(
      <Button onClick={click} theme={theme}>
        Hello World
      </Button>
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  it('should handle click correctly', () => {
    const click = jest.fn();
    const wrapper = shallow(
      <Button onClick={click} theme={theme}>
        Hello World
      </Button>
    );

    wrapper.props().onClick();
    expect(click).toHaveBeenCalled();

    wrapper.unmount();
  });
});
