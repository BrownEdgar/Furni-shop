import { createSlice } from '@reduxjs/toolkit';

const footerBottomSlice = createSlice({
	name: 'footerBottom',
	initialState: '© NameBrand 2022 - All Rights Reserved',
	reducers: {},
});

export const getFooterBottomDataSelector = (state) => state.footerBottom;

export default footerBottomSlice.reducer;
