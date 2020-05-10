import * as actionConstant from '../ActionConstant/ActionConstant';

export const USER_DATA_INIT = () => ({ type: actionConstant.GET_USER_DATA_INIT });
export const USER_DATA_SUCCESS = (data) => ({
  type: actionConstant.GET_USER_DATA_SUCCESS,
  data: data,
});
export const USER_DATA_ERROR = (data) => ({ type: actionConstant.GET_USER_DATA_ERROR, data: data });
