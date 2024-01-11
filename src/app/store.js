import { configureStore } from '@reduxjs/toolkit';
import { bestFurnitureReducer } from '../features';

const store = configureStore({
	reducer: {
		bestFurniture: bestFurnitureReducer,
	},
});

export default store;
