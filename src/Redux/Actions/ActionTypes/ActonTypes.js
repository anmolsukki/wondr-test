import * as actionConstant from '../ActionConstant/ActionConstant';

export const IMAGE_INIT = () => ({ type: actionConstant.IMAGES_DATA_INIT });
export const IMAGE_SUCCESS = (data) => ({
  type: actionConstant.IMAGES_DATA_SUCCESS,
  data: data,
});
export const IMAGE_ERROR = (data) => ({ type: actionConstant.IMAGES_DATA_ERROR, data: data });
