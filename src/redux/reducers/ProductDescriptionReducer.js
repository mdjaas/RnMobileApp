import {ActionTypes} from '../actionTypes';

const initialState = {
  productDesc: {},
  isLoading: false,
};

const productDescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT_DESCRIPTION:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_PRODUCT_DESCRIPTION_SUCCESS:
      return {
        productDesc: action.data,
        isLoading: false,
      };
    case ActionTypes.GET_PRODUCT_DESCRIPTION_FAILURE:
      return {
        ...state,
        error: action?.data,
        isLoading: false,
      };
    default:
      return {
        ...state,
        productDesc: {},
        isLoading: false,
      };
  }
};

export default productDescriptionReducer;
