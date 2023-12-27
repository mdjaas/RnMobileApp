import {fork} from 'redux-saga/effects';

import LoginSaga from './LoginSaga';
import ProductListSaga from './ProductListSaga';
import ProductDescriptionSaga from './ProductDescriptionSaga';
import PostSaga from './PostsSaga';

export default function* rootSaga() {
  yield fork(LoginSaga);
  yield fork(ProductListSaga);
  yield fork(ProductDescriptionSaga);
  yield fork(PostSaga);
}
