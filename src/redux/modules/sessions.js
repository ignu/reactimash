const LOADING = "conference/sessions/LOADING";

const defaultState = {
  sessions : [],
  loading: false
};

export default function reducer(state = defaultState, action = {}) {
  switch(action.type) {
    case LOADING:
      return Object.assign({}, state, { loading: true});
    default:
      return state;
  }
}

export function loadSessions() {
  return { type: LOADING };
}
