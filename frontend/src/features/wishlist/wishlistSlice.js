import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishtlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // loading the wishlist items from the wishlist array in db.json
    loadItem: (state, action) => {
      state.wishlist = action.payload;
    },
    // adding items
    addItem: (state, action) => {
      state.wishlist.push(action.payload);
    },
    // removing items
    removeItem: (state, action) => {
      const item = action.payload;
      state.wishlist = state.wishlist.filter(
        (product) => product.slug !== item.slug,
      );
    },
  },
});

export const { loadItem, addItem, removeItem } = wishtlistSlice.actions;
export default wishtlistSlice.reducer;
