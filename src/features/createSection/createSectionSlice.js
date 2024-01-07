import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	key: 1,
	img: 'lui-peng-8NxTrV6i4WQ-unsplash 1.png',
	title: 'We Create your home more aestetic',
	desc: 'Furnitre power is a software as services for multiperpose business management system,',
	checklist: [
		{
			key: 'chklst1',
			title: 'Valuation Services',
			body: 'Sometimes features require a short description. This can be detailed description',
		},
		{
			key: 'chklst2',
			title: 'Development of Furniture Modelss',
			body: 'Sometimes features require a short description. This can be detailed description',
		},
	],
};

const createSectionSlice = createSlice({
	name: 'createSection',
	initialState,
	reducers: {},
});

export const getDataSelector = (state) => state.createSection;

export default createSectionSlice.reducer;
