import { thunk } from 'redux-thunk';

import { configureStore, Tuple } from '@reduxjs/toolkit';

import productReducer from './slice/productSlice';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    productsState: productReducer,
  },
  middleware: () => new Tuple(thunk),
});
export default store;
