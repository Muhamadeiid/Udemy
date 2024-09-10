import { createSlice } from "@reduxjs/toolkit";
const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
 const initialState = {
    courses: storedCart,
    totalPrice:0,
}

export const cartSlice =  createSlice({
    name: "card",
    initialState,
    reducers: {
        addToCard: (state, { payload }) => {
            const courseExists = state.courses.find((course) => course.id === payload.id);
            if (!courseExists) {
              state.courses = [...state.courses, payload];
              localStorage.setItem('cart', JSON.stringify(state.courses));
            }
          },
        removeFromCard:(state,action)=>{
            const itemId = action.payload;
            let removed = false;
            state.courses = state.courses.filter((item)=> {
                if (!removed && item.id === itemId) {
                    removed =true;
                    return false
                }
                return true
            })
            localStorage.setItem('cart', JSON.stringify(state.courses));
        },
        calcTotal:(state)=>{
            let total = 0
            state.courses.forEach((course)=> {
                total+=course.price;
            })
            state.totalPrice = total
        }
        }
})