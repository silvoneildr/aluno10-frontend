import { Types as WelcomeTypes, Creators as WelcomeAction } from 'Store/ducks/welcome';

describe('Welcome Action', () => {
  it('should create a action to setText', () => {
    const text = 'wagner';

    const expectAction = {
      type: WelcomeTypes.SET_TEXT,
      payload: { text }
    };

    expect(WelcomeAction.setText(text)).toEqual(expectAction);
  });

  it('should create a action to getUserGit', () => {
    const name = 'wagner';

    const expectAction = {
      type: WelcomeTypes.GET_USER_GIT,
      payload: { name }
    };

    expect(WelcomeAction.getUserGit(name)).toEqual(expectAction);
  });

  it('should create a action to setUserGit', () => {
    const userName = 'wagner';

    const expectAction = {
      type: WelcomeTypes.SET_USER_GIT,
      payload: { userName }
    };

    expect(WelcomeAction.setUserGit(userName)).toEqual(expectAction);
  });

  it('should create a action to setUserGitFailure', () => {
    const userName = 'wagner';

    const expectAction = {
      type: WelcomeTypes.SET_USER_FAILURE
    };

    expect(WelcomeAction.setUserGitFailure(userName)).toEqual(expectAction);
  });
});
