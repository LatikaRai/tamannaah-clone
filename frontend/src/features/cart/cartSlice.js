import { createSlice } from "@reduxjs/toolkit";
import { a } from "motion/react-client";

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
      const product = action.payload;

      const existingProduct = state.cart.find((item) => item.slug === product.slug);

      if (existingProduct) existingProduct.quantity++;
      else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    // increasing the quantity
    incQty: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.slug === product.slug);
      if (existingProduct) {
        existingProduct.quantity++;
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
          existingProduct.quantity--;
        }
      }
    },
    // remove the item from cart
    removeItem: (state, action) => {
        state.cart = state.cart.filter((item) => item.slug !== product.slug);
      
    },
  },
});

export const { loadCart, addToCart, incQty, decQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
