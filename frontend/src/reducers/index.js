import {combineReducers} from 'redux';
import test from './test';
import loggedIn from './loggedIn';

const reducers = combineReducers({
  test,
  loggedIn
});

export default reducers;
