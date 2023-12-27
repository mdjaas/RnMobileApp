import {combineReducers} from 'redux';

import productsListReducer from './ProductsListReducer';
import UserInfoReducer from './UserInfoReducer';
import productDescriptionReducer from './ProductDescriptionReducer';
import postsReducer from './PostsReducer';

export default combineReducers({
  productsListReducer,
  UserInfoReducer,
  productDescriptionReducer,
  postsReducer,
});
