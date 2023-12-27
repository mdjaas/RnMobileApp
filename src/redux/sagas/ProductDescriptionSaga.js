import {call, takeLatest, put} from 'redux-saga/effects';

import {ActionTypes} from '../actionTypes';
import {getUniqueProduct} from '../../services';

function* ProductDescriptionSaga({payload}) {
  const {id} = payload ?? {};
  try {
    const response = yield call(getUniqueProduct, {id});

    if (response) {
      yield put({
        type: ActionTypes.GET_PRODUCT_DESCRIPTION_SUCCESS,
        data: response,
      });
    } else {
      yield put({
        type: ActionTypes.GET_PRODUCT_DESCRIPTION_FAILURE,
        data: {message: 'Product data could not be loaded'},
      });
    }
  } catch {
    yield put({
      type: ActionTypes.GET_PRODUCT_DESCRIPTION_FAILURE,
      data: {message: 'Product data could not be loaded'},
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(ActionTypes.GET_PRODUCT_DESCRIPTION, ProductDescriptionSaga);
}
