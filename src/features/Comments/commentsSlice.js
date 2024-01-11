import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    username: "Josh Smith",
    image: "fb0ec304610b4834f08a60cec93a7a06.jpg",
    job: "Manager of The New York Times",
    description: "They are have a perfect touch for make something so professional, interest and useful for a lot of people ."
  },
  {
    id: 2,
    username: "Josh Smith",
    image: "fb0ec304610b4834f08a60cec93a7a06.jpg",
    job: "Manager of The New York Times",
    description: "They are have a perfect touch for make something so professional, interest and useful for a lot of people ."
  },
  {
    id: 3,
    username: "Josh Smith",
    image: "fb0ec304610b4834f08a60cec93a7a06.jpg",
    job: "Manager of The New York Times",
    description: "They are have a perfect touch for make something so professional, interest and useful for a lot of people ."
  }
]

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialValue
})

export const selectAllComments = (state) => state.comments

export default commentsSlice.reducer