import axios from 'axios';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';

export const UserAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/users`;
  return async (dispatch) => {
    dispatch(actionTypes.USER_DATA_INIT());
    return axios
      .get(url, { headers: await getHeaders(false) })
      .then((res) => {
        console.log(res, 'Get User Data Success');
        dispatch(actionTypes.USER_DATA_SUCCESS(res.data));
      })
      .catch((error) => {
        console.log(error, 'Get User Date Error');
        dispatch(actionTypes.USER_DATA_ERROR(error));
      });
  };
};
