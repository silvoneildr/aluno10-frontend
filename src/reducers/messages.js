import { GET_MESSAGES } from '../actions/actionTypes';

const messages = (state = {}, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default messages;
