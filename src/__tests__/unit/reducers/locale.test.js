import locale from '../../../reducers/locale';
import { GET_LOCALE } from '../../../reducers/types';

test('should render messages from en-US locale without type', () => {
  const INITIAL_STATE = 'en-US';
  const local = locale(INITIAL_STATE, { type: GET_LOCALE });
  expect(local).toEqual('en-US');
});

test('should render messages from en-US locale with type GET_LOCALE', () => {
  const INITIAL_STATE = 'en-US';
  const local = locale(INITIAL_STATE, '');
  expect(local).toEqual('en-US');
});
