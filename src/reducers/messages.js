import { GET_MESSAGES } from './types';
import { getMessagesByLocale } from '../locale';

const INITIAL_STATE = getMessagesByLocale('en-US');

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default messages;
