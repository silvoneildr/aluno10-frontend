import React from 'react';
import Card from 'Components/Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('should render p element correctly', () => {
    const wrapper = shallow(
      <Card>
        <p>Hello World</p>
      </Card>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
