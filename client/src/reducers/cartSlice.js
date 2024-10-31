// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      } else {
        state.cartItems.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
