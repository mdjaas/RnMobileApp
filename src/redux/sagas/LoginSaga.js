import {call, takeLatest, put} from 'redux-saga/effects';

import {loginUser} from '../../services';
import {ActionTypes} from '../actionTypes';

function* loginSaga({payload}) {
  try {
    const {username, password} = payload ?? {};

    const response = yield call(loginUser, {username, password});

    if (response.data) {
      yield put({type: ActionTypes.GET_USER_INFO_SUCCESS, data: response.data});
    } else {
      yield put({
        type: ActionTypes.GET_USER_INFO_FAILURE,
        data: {message: 'User is Invalid'},
      });
    }
  } catch (error) {
    yield put({
      type: ActionTypes.GET_USER_INFO_FAILURE,
      data: {message: 'User is Invalid'},
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(ActionTypes.GET_USER_INFO, loginSaga);
}
