import {ActionTypes} from '../actionTypes';

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      return {
        ...state,
      };
    case ActionTypes.GET_POSTS_SUCCESS:
      return {
        posts: action.data,
      };
    case ActionTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        error: action?.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postsReducer;
