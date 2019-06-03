import React from 'react';
import Button from 'Components/Button';
import theme from 'Root/styles/theme';
import { render, fireEvent } from 'react-testing-library';

function renderButton(props) {
  const utils = render(<Button onClick={() => {}} theme={theme} {...props} />);
  const button = utils.container.firstChild;
  return { ...utils, button };
}

describe('<Button />', () => {
  it('should render correctly', () => {
    const { button } = renderButton({ children: 'Hello World' });
    expect(button).toMatchSnapshot();
  });

  it('should handle click correctly', () => {
    const onClick = jest.fn();
    const { button } = renderButton({ onClick });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
