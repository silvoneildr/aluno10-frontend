import { all, takeLatest } from 'redux-saga/effects';

import { Types as WelcomeTypes } from '../ducks/welcome';

import { getUserGit } from './welcome';

export default function* rootSaga() {
  yield all([takeLatest(WelcomeTypes.GET_USER_GIT, getUserGit)]);
}
