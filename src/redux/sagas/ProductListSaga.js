import {call, takeLatest, put} from 'redux-saga/effects';

import {ActionTypes} from '../actionTypes';
import {getProductsList} from '../../services';

function* ProductListSaga() {
  //add try catch here, and handle error case
  try {
    const response = yield call(getProductsList);

    if (response.products) {
      yield put({
        type: ActionTypes.GET_PRODUCT_LIST_SUCCESS,
        data: response.products,
      });
    }
  } catch (error) {
    yield put({
      type: ActionTypes.GET_PRODUCT_LIST_FAILURE,
      data: {message: 'Product could not be loaded'},
    });
  }
}
export default function* watcherSaga() {
  yield takeLatest(ActionTypes.GET_PRODUCT_LIST, ProductListSaga);
}
