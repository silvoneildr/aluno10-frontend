import reducers from '../../../reducers';

test('should render messages from en-US locale', () => {
  const state = reducers(undefined, {});
  expect(state.locale).toEqual('en-US');
});
