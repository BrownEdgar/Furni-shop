import { configureStore } from '@reduxjs/toolkit';
import { bestFurnitureReducer } from '../features';
import productReducer from '../features/product/productSlice';

const store = configureStore({
	reducer: {
		bestFurniture: bestFurnitureReducer,
    product: productReducer,
	},
});

export default store;
