import axios from 'axios';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';

export const ImagesAction = (page) => {
  let url = `https://picsum.photos/v2/list?page=${page}`;
  return async (dispatch) => {
    dispatch(actionTypes.IMAGE_INIT());
    return axios
      .get(url, { headers: await getHeaders(false) })
      .then((res) => {
        console.log(res, 'Image Data Success');
        dispatch(actionTypes.IMAGE_SUCCESS(res.data));
      })
      .catch((error) => {
        console.log(error, 'Image Date Error');
        dispatch(actionTypes.IMAGE_ERROR(error));
      });
  };
};
