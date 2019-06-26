import { GET_LOCALE } from '../actions/actionTypes';

const INITIAL_STATE = 'en-US';

const locale = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LOCALE:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default locale;
