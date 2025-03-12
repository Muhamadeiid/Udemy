import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  courses: storedCart,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart", 
  initialState,
  reducers: {
    addToCard: (state, { payload }) => {
      const courseExists = state.courses.some((course) => course.id === payload.id);
      if (!courseExists) {
        state.courses.push(payload);
        localStorage.setItem("cart", JSON.stringify(state.courses));
      }
    },
    removeFromCard: (state, action) => {
      state.courses = state.courses.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.courses));
    },
    calcTotal: (state) => {
      state.totalPrice = state.courses.reduce((total, course) => total + course.price, 0);
    },
    toggleCartItem: (state, { payload }) => {
      const itemIndex = state.courses.findIndex((item) => item.id === payload.id);
      if (itemIndex !== -1) {
        state.courses.splice(itemIndex, 1);
      } else {
        state.courses.push(payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.courses));
    },
  },
});

export const { addToCard, removeFromCard, calcTotal, toggleCartItem } = cartSlice.actions;
export default cartSlice.reducer; 
