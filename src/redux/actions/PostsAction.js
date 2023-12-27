import {ActionTypes} from '../actionTypes';

export const getPosts = payload => ({
  type: ActionTypes.GET_POSTS,
  payload,
});
