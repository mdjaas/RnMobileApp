import {ActionTypes} from '../actionTypes';

export const getProductList = payload => ({
  type: ActionTypes.GET_PRODUCT_LIST,
  payload,
});
