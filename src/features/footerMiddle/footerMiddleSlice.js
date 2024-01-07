import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: 'col1',
		title: 'Our Products',
		productList: [
			{ id: 'r1', body: 'The Support Suite' },
			{ id: 'r2', body: 'The Sales Suite' },
			{ id: 'r3', body: 'Support' },
			{ id: 'r4', body: 'Guide' },
		],
	},
	{
		id: 'col2',
		title: 'Top Features',
		productList: [
			{ id: 'r1', body: 'Ticketing System' },
			{ id: 'r2', body: 'Knowledge Base' },
			{ id: 'r3', body: 'Community Forums' },
			{ id: 'r4', body: 'Help Desk Software' },
		],
	},
	{
		id: 'col3',
		title: 'Resources',
		productList: [
			{ id: 'r1', body: 'Product Support' },
			{ id: 'r2', body: 'Request Demo' },
			{ id: 'r3', body: 'Library' },
			{ id: 'r4', body: 'Peoplepower Blog' },
		],
	},
	{
		id: 'col4',
		title: 'Company',
		productList: [
			{ id: 'r1', body: 'About Us' },
			{ id: 'r2', body: 'Press' },
			{ id: 'r3', body: 'Investors' },
			{ id: 'r4', body: 'Events' },
		],
	},
	{
		id: 'col5',
		title: 'Favourite Things',
		productList: [
			{ id: 'r1', body: 'For Enterprise' },
			{ id: 'r2', body: 'For Startups' },
			{ id: 'r3', body: 'For Benchmark' },
			{ id: 'r4', body: 'For Small Business' },
		],
	},
];

const footerMiddleSlice = createSlice({
	name: 'footerMiddle',
	initialState,
	reducers: {},
});

export const getFooterMiddleDataSelector = (state) => state.footerMiddle;

export default footerMiddleSlice.reducer;
