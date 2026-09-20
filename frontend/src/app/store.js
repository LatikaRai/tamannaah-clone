import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/user/userSlice'
import productSlice from '../features/product/productSlice'
import cartSlice from '../features/cart/cartSlice'
import wishlistSlice from '../features/wishlist/wishlistSlice'

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        productReducer: productSlice,
        cartReducer: cartSlice,
        wishlistReducer: wishlistSlice
    }
})