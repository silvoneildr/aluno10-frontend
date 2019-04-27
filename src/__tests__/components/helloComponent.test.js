import React from 'react';
import { shallow } from 'enzyme';

import HelloComponent from 'Components/HelloComponent';

describe('HelloComponent', () => {
  it('should render loading correctly', () => {
    const wrapper = shallow(<HelloComponent text="" userName="" loading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component props correctly', () => {
    const wrapper = shallow(<HelloComponent text="Olá" userName="Wagner" loading={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
