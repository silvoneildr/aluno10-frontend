import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as WelcomeActions } from '../ducks/welcome';

export function* getUserGit(action) {
  try {
    const {
      data: { name }
    } = yield call(api.get, `https://api.github.com/users/${action.payload.name}`);

    yield put(WelcomeActions.setUserGit(name));
  } catch (err) {
    yield put(WelcomeActions.setUserGitFailure());
  }
}
