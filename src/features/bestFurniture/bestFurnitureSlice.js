import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: 'The Best Furniture Manufacturer of your choice',
	body: 'Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services \\',
	img: 'BestFurnitureImg.png',
};

const bestFurnitureSlice = createSlice({
	name: 'bestFurniture',
	initialState,
	reducers: {},
});

export const getBestFurnitureDataSelector = (state) => state.bestFurniture;

export default bestFurnitureSlice.reducer;
