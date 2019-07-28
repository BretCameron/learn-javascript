import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authReducer from './authReducer';

export default combineReducers({
  course: courseReducer,
  auth: authReducer
})