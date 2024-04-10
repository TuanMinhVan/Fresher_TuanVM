import { combineReducers } from 'redux';

import productsReducer from './slice/productSlice';

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
