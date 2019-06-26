import { GET_LOCALE } from './actionTypes';

export const setLocale = (dispatch, locale) => {
  dispatch({ type: GET_LOCALE, locale });
};
