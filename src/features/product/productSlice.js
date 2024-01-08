import { createSlice } from "@reduxjs/toolkit";

const initialValues = [
  {
    id: 1,
    name: "Ceiling Light",
    price: 75,
    old_price: 82,
    image: "116bcc90e2f261a81a619ef41d7f44e6.jpg"
  },
  {
    id: 2,
    name: "Wood Chair",
    price: 50,
    old_price: 70,
    image: "622f631535544d7a3babe67e9aa6a8c8.png"
  },
  {
    id: 3,
    name: "Papper Cupboard",
    price: 105,
    old_price: 120,
    image: "b41571a60974d3b3e79c8f3d942cbb65.jpg"
  },
  {
    id: 4,
    name: "Ole Gundorse Spring...",
    price: 82,
    old_price: 100,
    image: "c4b77808832583fe3242fb027c890183.jpg"
  },
  {
    id: 5,
    name: "Treos Seroes 911",
    price: 200,
    old_price: 210,
    image: "ac5d27f084ee350a6571863d1199a131.jpg"
  },
  {
    id: 6,
    name: "Multi bilderman slibber...",
    price: 45,
    old_price: 50,
    image: "61f50f0a929288ea5e402cc0ae89bde7.jpg"
  },
  {
    id: 7,
    name: "XORA corner desk",
    price: 320,
    old_price: 325,
    image: "55d7389b12ec68b56e8686eb48107e66.jpg"
  },
  {
    id: 8,
    name: "Black Forest Series wo...",
    price: 225,
    old_price: 240,
    image: "f3e0a05db2edf04624c49158fc659aad.jpg"
  }
]

const productSlice = createSlice({
  name: "product",
  initialState: initialValues
})

export const allProducts = (state) => state.product

export default productSlice.reducer