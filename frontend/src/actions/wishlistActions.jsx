import { addItem, loadItem, removeItem } from "../features/wishlist/wishlistSlice";
import axios from "../services/axios";

export const asyncLoadWishlist = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/wishlist");
    dispatch(loadItem(data));
  } catch (error) {
    console.log("wishlist load error: ", error);
  }
};

export const asyncAddToWishlist = (product) => async (dispatch) => {
  try {
    const { data } = await axios.post("/wishlist",product);

    dispatch(addItem(data))
  } catch (error) {
    console.log("wishlist add error: ", error);
  }
};

export const asyncRemoveFromWishlist = (product) => async (dispatch) => {
    try {
        await axios.delete(`/wishlist/${product.id}`);
        dispatch(removeItem(product))
    } catch (error) {
    console.log("wishlist remove error: ", error);
    }
}