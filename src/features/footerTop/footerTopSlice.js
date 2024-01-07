import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: 'FurniShop',
	socialIcons: [
		{ id: 1, name: 'instagram', link: '#', icon: 'footer_insta' },
		{ id: 2, name: 'facebook', link: '#', icon: 'footer_fb' },
		{ id: 3, name: 'twitter', link: '#', icon: 'footer_twt' },
		{ id: 4, name: 'github', link: '#', icon: 'footer_github' },
		{ id: 5, name: 'instagram', link: '#', icon: 'footer_insta' },
	],
};

const footerTopSlice = createSlice({
	name: 'footerTop',
	initialState,
	reducers: {},
});

export const getFooterTopDataSelector = (state) => state.footerTop;

export default footerTopSlice.reducer;
