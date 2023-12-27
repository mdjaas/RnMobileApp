import axios from 'axios';

import {API_CONFIGURATION, API_END_POINTS} from '../services/urls';
import LoginResponse from './models/LoginResponse';
import ProductItemResponse from './models/ProductItemResponse';
import ProductResponse from './models/ProductsResponse';
import PostsResponse from './models/PostsResponse';

// BASE FUNCTION FOR GET API CALLS
const getApiAxios = async ({url = ''}) => {
  const response = await axios({method: 'get', url});
  return response;
};

// BASE FUNCTION FOR POST API CALLS
const postApiAxios = async ({url = '', body = {}}) => {
  const response = await axios.post(url, body);

  return response;
};

//Login Api
export const loginUser = async (body = {}) => {
  try {
    const apiResponse = await postApiAxios({
      url: `${API_CONFIGURATION.BASE_URL}${API_END_POINTS.LOGIN}`,
      body,
    });

    const response = new LoginResponse(apiResponse?.data);
    return response;
  } catch (error) {
    return {message: 'user is invalid'};
  }
};

//Get products list
export const getProductsList = async () => {
  try {
    const apiResponse = await getApiAxios({
      url: `${API_CONFIGURATION.BASE_URL}${API_END_POINTS.GET_ALL_PRODUCTS}`,
    });
    const response = new ProductResponse(apiResponse.data);

    return response;
  } catch {
    //return error message here
  }
};

//Get unique product
export const getUniqueProduct = async ({id}) => {
  try {
    const apiResponse = await getApiAxios({
      url: `${API_CONFIGURATION.BASE_URL}${API_END_POINTS.GET_ALL_PRODUCTS}/${id}`,
    });

    const response = new ProductItemResponse(apiResponse.data);
    return response;
  } catch (error) {}
};

//Get Posts
export const getPosts = async () => {
  try {
    const apiResponse = await getApiAxios({
      url: `${API_CONFIGURATION.BASE_URL}${API_END_POINTS.GET_POSTS}`,
    });

    const response = new PostsResponse(apiResponse.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
