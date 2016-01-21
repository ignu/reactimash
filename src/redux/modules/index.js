import { combineReducers } from 'redux';
import sessions from './sessions';
import { routeReducer } from 'redux-simple-router';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

export default combineReducers({
  reduxAsyncConnect,
  routing: routeReducer,
  sessions: sessions
});
