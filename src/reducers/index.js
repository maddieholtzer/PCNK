import { combineReducers } from 'redux';
import profile from './profile';
import auth from './auth';
import {root} from './root';
import loading from './loading';

export default combineReducers({
  root,
  profile,
  auth,
  loading
})
