import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../features/Comments/commentsSlice';
import productReducer from '../features/product/productSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    comments: commentsReducer
  }
})

export default store