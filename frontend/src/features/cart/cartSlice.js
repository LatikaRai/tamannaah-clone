import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // loading the cart
    loadCart: (state,action) => {
      state.cart = action.payload
    },

    // add to
    addToCart: (state, action) => {
        state.cart.push(action.payload);
    },
    // increasing the quantity
    incQty: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.slug === product.slug);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    // decreasing the quantity
    decQty: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.slug === product.slug);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.cart = state.cart.filter((item) => item.slug !== product.slug);
        } else {
          existingProduct.quantity -= 1;
        }
      }
    },
    // remove the item from cart
    removeItem: (state, action) => {
      const product = action.payload
        state.cart = state.cart.filter((item) => item.slug !== product.slug);
      
    },
  },
});

export const { loadCart, addToCart, incQty, decQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
