import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../../models/product';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  page: number;
  total: number;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  hasMore: true,
  page: 1,
  total: 0,
};

const productSlice = createSlice({
  name: "products", /// unique name for the slice
  initialState,
  reducers: {
    fetchProductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.total = action.payload.total;
      state.hasMore = action.payload.products.length < action.payload.total;
      state.page = 1;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMoreProductsRequest: (state) => {
      state.loading = true;
    },
    fetchMoreProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = [...state.products, ...action.payload.products];
      state.hasMore = state.products.length < state.total;
      state.page = state.page + 1;
    },
    fetchMoreProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// const productReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case productActions.FETCH_PRODUCTS_REQUEST:
//       return { ...state, loading: true, error: null };
//     case productActions.FETCH_PRODUCTS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         products: action.payload,
//         hasMore: true,
//         page: 1,
//       };
//     case productActions.FETCH_PRODUCTS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     case productActions.FETCH_MORE_PRODUCTS_REQUEST:
//       return { ...state, loading: true }; // Only update loading for more products
//     case productActions.FETCH_MORE_PRODUCTS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         products: [...state.products, ...action.payload],
//         hasMore: action.payload.length > 0,
//         page: state.page + 1,
//       };
//     case productActions.FETCH_MORE_PRODUCTS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default productReducer;

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchMoreProductsRequest,
  fetchMoreProductsSuccess,
  fetchMoreProductsFailure,
} = productSlice.actions;

export default productSlice.reducer;
