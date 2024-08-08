import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      console.log(existingItem);
      if (!existingItem) state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (items) => items.card.info.id !== action.payload.card.info.id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
