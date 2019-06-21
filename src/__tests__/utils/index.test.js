import { flattenMessages } from '../../utils/index';

describe('Test utils functions', () => {
  it('state should have flattenMessages function', () => {
    expect(flattenMessages({})).toEqual({});
  });
});
