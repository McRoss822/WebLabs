import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cart: [], 
    },
    reducers: {
      addToCart: (state, action) => {
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        const { id, name, price, count } = action.payload;

      if (existingItem) {
        
        existingItem.count += count;
      } else {
        state.cart.push({ id, name, price, count });
      }
      },
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      },
      incrementCount: (state, action) => {
        const itemToIncrement = state.cart.find(item => item.id === action.payload);
        if (itemToIncrement) {
          itemToIncrement.count += 1;
        }
      },
      decrementCount: (state, action) => {
        const itemToDecrement = state.cart.find(item => item.id === action.payload);
        if (itemToDecrement && itemToDecrement.count > 1) {
          itemToDecrement.count -= 1;
        }
        else if (itemToDecrement && itemToDecrement.count == 1) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
          }
          if (!state.cart) {
            state.cart = [];
          }  
      },
      CLEAR_CART: (state) => {
        state.cart = [];
      },
    },
  });
  
  export default cartSlice.reducer;
  export const { addToCart, removeFromCart, incrementCount, decrementCount, CLEAR_CART } = cartSlice.actions;