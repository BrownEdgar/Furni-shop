import { configureStore } from '@reduxjs/toolkit';
import createSectionReducer from '../features/createSection/createSectionSlice';

const store = configureStore({
	reducer: {
		createSection: createSectionReducer,
	},
});

export default store;
