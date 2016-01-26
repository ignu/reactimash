const LOADING = "conference/sessions/LOADING";

const defaultState = {
  sessions : [],
  loading: false
};

export default function reducer(state = defaultState, action = {}) {
  return state;
}

export function loadSessions() {
  return { type: LOADING };
}
