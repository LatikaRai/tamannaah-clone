import { loadProduct } from "../features/product/productSlice";
import axios from "../services/axios";

export const asyncLoadProducts = () => async (dispatch,getState) => {
    try {
        const {data} = await axios.get('/products')
        dispatch(loadProduct(data))
    } catch (error) {
        console.log(error)
    }
}