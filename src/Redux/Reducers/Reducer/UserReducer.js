import * as actionConstant from '../../Actions/ActionConstant/ActionConstant';

const initialState = {
  reUserData: [],
  isLoading: false,
  error: null,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.GET_USER_DATA_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        reUserData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.GET_USER_DATA_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };
    default:
  }
  return state;
};
