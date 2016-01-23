import 'whatwg-fetch';

const LOAD = "reactimash/sessions/LOAD";
const LOADED = "reactimash/sessions/LOADED";

const SESSIONS_URL = 'https://dl.dropboxusercontent.com/s/h98ybq68ua33f7p/SessionsData.json';

export default function reducer(state = { sessions: [] }, action ={}) {
  switch (action.type) {
    case LOAD:
      return Object.assign({}, state, { loading: true });
    case LOADED:
      return Object.assign({}, state, { loading: false, sessions: action.sessions });
      default: return state;
  }
}

export function loadSessions() {
  return dispatch => {

    dispatch({ type: LOAD });

    return fetch(SESSIONS_URL)
      .then(response => response.json())
      .then((json) => {
        dispatch({type: LOADED, sessions: json});
      })
  }
}
