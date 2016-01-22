
const FETCH_SESSIONS = 'conferences/sessions/FETCH_SESSIONS';
const FETCH_SESSIONS_COMPLETE = 'conferences/sessions/FETCH_SESSIONS_COMPLETE';

const SESSIONS_URL = 'https://dl.dropboxusercontent.com/s/h98ybq68ua33f7p/SessionsData.json';

const initialState = {
  loadingSessions: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_SESSIONS:
      return Object.assign(state, { loadingSessions: true});
    default:
      return state;
  }
}

export function fetchSessions() {
  return fetch(SESSIONS_URL).then(response => response.json())
}
