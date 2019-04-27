import reducer, {
  Creators as WelcomeActions,
  INITIAL_STATE as initialState
} from 'Store/ducks/welcome';

describe('Welcome Reducer', () => {
  it('should be equal to initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('state should be the same passed', () => {
    const state = reducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  it('should have the text passed', () => {
    const state = reducer(initialState, WelcomeActions.setText('Wagner'));
    expect(state).toEqual({ ...initialState, text: 'Wagner' });
  });

  it('should set loading true', () => {
    const state = reducer(initialState, WelcomeActions.getUserGit());
    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('should set username and turn off the error and loading', () => {
    const state = reducer(initialState, WelcomeActions.setUserGit('wagnerdutra'));
    expect(state).toEqual({
      ...initialState,
      userName: 'wagnerdutra',
      loading: false,
      error: false
    });
  });

  it('should set error on failure', () => {
    const state = reducer(initialState, WelcomeActions.setUserGitFailure());
    expect(state).toEqual({ ...initialState, error: true, loading: false });
  });
});
