import {ActionTypes} from '../actionTypes';

const initialState = {
  productsList: [],
  isLoading: false,
};

const productsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productsList: action.data,
        isLoading: false,
      };
    case ActionTypes.GET_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        error: action?.data,
        isLoading: false,
      };

    default:
      return {
        ...state,
        isLoading: false,
      };
  }
};

export default productsListReducer;
