import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import sessionsReducer from './sessions';

export default combineReducers({
  reduxAsyncConnect,
  sessions: sessionsReducer,
  routing: routeReducer
});
