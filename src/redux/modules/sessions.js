const LOADING = "conference/sessions/LOADING";
const LOADING_COMPLETE = "conference/sessions/LOADING_COMPLETE";
const SESSIONS_URL = 'https://dl.dropboxusercontent.com/s/h98ybq68ua33f7p/SessionsData.json';

const defaultState = {
  sessions : [],
  loading: false
};

export default function reducer(state = defaultState, action = {}) {
  switch(action.type) {
    case LOADING:
      return Object.assign({}, state, { loading: true});
    case LOADING_COMPLETE:
      return Object.assign({}, state, { loading: false, sessions: action.data });
    default:
      return state;
  }
}

export function loadSessions() {
  return function(dispatch) {
    dispatch({ type: LOADING });

    fetch(SESSIONS_URL).then((response) => {
      dispatch({ type: LOADING_COMPLETE, data: response.json() });
    });
  };
}
