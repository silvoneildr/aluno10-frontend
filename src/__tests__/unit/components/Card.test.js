import React from 'react';
import Card from 'Components/Card';
import { render } from 'react-testing-library';

describe('<Card />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Card>
        <p>Hello World</p>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
