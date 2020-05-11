import { combineReducers } from 'redux';
import { ImageReducer } from './Reducer/ImageReducer';

export default combineReducers({
  CtrImage: ImageReducer,
});
