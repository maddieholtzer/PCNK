import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
// import entities from './entities_reducer';
// import ui from './ui_reducer';

export default combineReducers({
  session: sessionReducer
});
