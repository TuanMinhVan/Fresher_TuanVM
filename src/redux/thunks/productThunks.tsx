import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as actions from '../slice/productSlice';
import { RootState } from '../store';

const baseUrl = 'https://dummyjson.com';

/**
 * The `fetchProducts` function is a Redux thunk action that fetches product data from an API endpoint
 * and dispatches corresponding actions based on the success or failure of the request.
 * @param [limit=30] - The `limit` parameter in the `fetchProducts` function specifies the maximum
 * number of products to fetch from the API. By default, if no `limit` is provided, it will fetch 30
 * products. You can adjust this limit to fetch a different number of products by passing a different
 * value when
 */

const fetchProducts =
  (limit = 30): ThunkAction<void, RootState, any, Action> =>
  async (dispatch) => {
    dispatch(actions.fetchProductsRequest());
    try {
      const response = await axios.get(
        `${baseUrl}/product?skip=0&limit=${limit}`
      );
      dispatch(actions.fetchProductsSuccess(response.data));
    } catch (error: any) {
      dispatch(actions.fetchProductsFailure(error));
    }
  };

/**
 * The function `fetchMoreProducts` is a Redux Thunk action that fetches more products from an API
 * based on the current page and limit.
 * @param [limit=30] - The `limit` parameter in the `fetchMoreProducts` function specifies the number
 * of products to fetch in each request. By default, if no `limit` value is provided when calling the
 * function, it will fetch 30 products. You can adjust this value to fetch a different number of
 * products per
 * @returns The `fetchMoreProducts` function returns a ThunkAction.
 */

const fetchMoreProducts =
  (limit = 30): ThunkAction<void, RootState, any, any> =>
  async (dispatch, getState) => {
    const { loading, hasMore, page } = getState().productsState;
    if (loading || !hasMore) return;
    dispatch(actions.fetchMoreProductsRequest());
    try {
      const response = await axios.get(
        `${baseUrl}/products?skip=${page * limit}&limit=${limit}`
      );
      dispatch(actions.fetchMoreProductsSuccess(response.data));
    } catch (error: any) {
      dispatch(actions.fetchMoreProductsFailure(error));
    }
  };
/**
 * The `searchProducts` function is a Redux thunk action creator in TypeScript React that fetches
 * products based on a search query using an API call.
 * @param {string} search - The `search` parameter in the `searchProducts` function is a string that
 * represents the search query used to fetch products from the API. It is used to dynamically construct
 * the API endpoint for searching products based on the user's input.
 */

const searchProducts =
  (search: string): ThunkAction<void, RootState, any, any> =>
  async (dispatch) => {
    dispatch(actions.searchProducts(search));
    try {
      const response = await axios.get(
        `${baseUrl}/products/search?q=${search}`
      );
      dispatch(actions.fetchProductsSuccess(response.data));
    } catch (error: any) {
      dispatch(actions.fetchProductsFailure(error));
    }
  };

export { baseUrl, fetchMoreProducts, fetchProducts, searchProducts };
