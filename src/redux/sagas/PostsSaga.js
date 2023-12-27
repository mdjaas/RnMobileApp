import {call, takeLatest, put} from 'redux-saga/effects';

import {ActionTypes} from '../actionTypes';
import {getPosts} from '../../services';

function* PostsSaga() {
  try {
    const response = yield call(getPosts);

    if (response.posts) {
      yield put({
        type: ActionTypes.GET_POSTS_SUCCESS,
        data: response.posts,
      });
    } else {
      yield put({
        type: ActionTypes.GET_POSTS_FAILURE,
        data: {message: 'Could not retrieve posts'},
      });
    }
  } catch {
    yield put({
      type: ActionTypes.GET_POSTS_FAILURE,
      data: {message: 'Could not retrieve posts'},
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(ActionTypes.GET_POSTS, PostsSaga);
}
