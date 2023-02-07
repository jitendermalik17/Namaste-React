import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: "cart",
    initialState: {
       items: [],
    },
    reducers : {
        addItems : (state,action) => {
            state.items.push(action.payload);
        },
        removeItem : () => {
            // have to write the logic for removeItem. Filter() method.
          state.items.pop();
        },
        clearCart : (state) => {
            state.items = [];
        }
    }
})
export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;