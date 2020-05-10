import { combineReducers } from 'redux';
import { UserReducer } from './Reducer/UserReducer';

export default combineReducers({
  CtrUser: UserReducer,
});
