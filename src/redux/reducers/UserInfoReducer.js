import {ActionTypes} from '../actionTypes';

const initialState = {
  username: '',
  password: '',
  email: '',
};

const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_INFO:
      return {
        ...state,
      };

    case ActionTypes.GET_USER_INFO_SUCCESS:
      return {
        userInfo: action.data,
        error: null,
      };

    case ActionTypes.GET_USER_INFO_FAILURE:
      return {
        ...state,
        error: action?.data,
      };
    case ActionTypes.CLEAR_USER_INFO:
      return {
        initialState,
      };

    default:
      return {
        ...state,
      };
  }
};

export default UserInfoReducer;
