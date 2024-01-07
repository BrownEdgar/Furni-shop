import { configureStore } from '@reduxjs/toolkit';
import { footerTopReducer, footerMiddleReducer, footerBottomReducer } from '../features';

const store = configureStore({
	reducer: {
		footerTop: footerTopReducer,
		footerMiddle: footerMiddleReducer,
		footerBottom: footerBottomReducer,
	},
});

export default store;
