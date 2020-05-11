import * as actionConstant from '../../Actions/ActionConstant/ActionConstant';

const initialState = {
  reImageData: [],
  isLoading: false,
  error: null,
};

export const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.IMAGES_DATA_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.IMAGES_DATA_SUCCESS:
      return {
        ...state,
        reImageData: [...state.reImageData, ...action.data],
        isLoading: false,
      };
    case actionConstant.IMAGES_DATA_ERROR:
      return {
        ...state,
        error: action.data ? action.data.message : null,
        isLoading: false,
      };
    default:
  }
  return state;
};
