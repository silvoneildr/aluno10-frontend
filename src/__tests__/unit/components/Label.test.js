import React from 'react';
import { render } from 'react-testing-library';
import Label from 'Components/Label';
import LabelError from 'Components/Label/Error';
import theme from 'Root/styles/theme';

describe('<Label />', () => {
  it('should render correclty', () => {
    const { container } = render(<Label theme={theme}>Informação</Label>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('<LabelError />', () => {
  it('should render correclty', () => {
    const { container } = render(<LabelError theme={theme}>Informação</LabelError>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
