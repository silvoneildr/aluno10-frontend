import { runSaga } from 'redux-saga';
import api from 'Services/api';
import MockAdapter from 'axios-mock-adapter';

import { Creators as WelcomeActions } from 'Store/ducks/welcome';

import { getUserGit } from 'Store/sagas/welcome';

const apiMock = new MockAdapter(api);

describe('Welcome Saga', () => {
  it('should be able to get user git', async () => {
    apiMock.onGet('https://api.github.com/users/wagnerdutra1010').reply(200, { name: 'wagner' });

    const dispatched = [];

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getUserGit,
      { payload: { name: 'wagnerdutra1010' } }
    ).toPromise();

    expect(dispatched).toContainEqual(WelcomeActions.setUserGit('wagner'));
  });

  it('should be able to failure on get user git', async () => {
    apiMock.onGet('https://api.github.com/users/wagnerdutra1010').reply(401, { name: 'wagner' });

    const dispatched = [];

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getUserGit,
      { payload: { name: 'wagnerdutra1010' } }
    ).toPromise();

    expect(dispatched).toContainEqual(WelcomeActions.setUserGitFailure());
  });
});
