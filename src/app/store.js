import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../features/Comments/commentsSlice';

const store = configureStore({
  reducer: {
    comments: commentsReducer
  }
})

export default store