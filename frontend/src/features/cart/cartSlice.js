import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) existingProduct.quantity++;
      else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    // increasing the quantity
    incQty: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    // decreasing the quantity
    decQty: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.cart = state.cart.filter((item) => item.id !== product.id);
        } else {
          existingProduct.quantity--;
        }
      }
    },
    // remove the item from cart
    removeItem: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        state.cart = state.cart.filter((item) => item.id !== product.id);
      }
    },
  },
});

export const { addToCart, incQty, decQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
