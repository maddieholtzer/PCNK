import { combineReducers } from 'redux';
import profile from './profile';
import auth from './auth';
import {root} from './root';

export default combineReducers({
  root,
  profile,
  auth,
})
