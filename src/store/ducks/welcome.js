export const Types = {
  SET_TEXT: 'welcome/SET_TEXT',
  GET_USER_GIT: 'welcome/GET_USER_GIT',
  SET_USER_GIT: 'welcome/SET_USER_GIT',
  SET_USER_FAILURE: 'welcome/SET_USER_FAILURE'
};

export const INITIAL_STATE = {
  text: '',
  loading: false,
  userName: '',
  error: false
};

export default function welcome(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_TEXT:
      return { ...state, text: action.payload.text };
    case Types.GET_USER_GIT:
      return { ...state, loading: true };
    case Types.SET_USER_GIT:
      return { ...state, loading: false, userName: action.payload.userName, error: false };
    case Types.SET_USER_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  setText: text => ({
    type: Types.SET_TEXT,
    payload: { text }
  }),
  getUserGit: name => ({
    type: Types.GET_USER_GIT,
    payload: { name }
  }),
  setUserGit: userName => ({
    type: Types.SET_USER_GIT,
    payload: { userName }
  }),
  setUserGitFailure: () => ({
    type: Types.SET_USER_FAILURE
  })
};
