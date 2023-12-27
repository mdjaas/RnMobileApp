import {ActionTypes} from '../actionTypes';

export const getProductDetails = payload => ({
  type: ActionTypes.GET_PRODUCT_DESCRIPTION,
  payload,
});

export const clearProductDetails = payload => ({
  type: ActionTypes.CLEAR_PRODUCT_DESCRIPTION,
});
