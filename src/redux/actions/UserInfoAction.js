import {ActionTypes} from '../actionTypes';

export const getUserInfo = payload => ({
  type: ActionTypes.GET_USER_INFO,
  payload,
});

export const clearUserInfo = payload => ({
  type: ActionTypes.CLEAR_USER_INFO,
});
