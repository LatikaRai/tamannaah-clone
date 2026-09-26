import { addToCart, decQty, incQty, loadCart, removeItem } from "../features/cart/cartSlice"
import axios from "../services/axios"

export const asyncLoadCart = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/cart')
        dispatch(loadCart(data))
    } catch (error) {
        console.log('load cart error: ', error)
    }
}

export const asyncAddToCart = (product) => async (dispatch,getState) => {
    try {
        const { cart } = getState().cartReducer

          console.log("PRODUCT:", product);
        console.log("CART:", cart);

        const existingProduct = cart.find(item => item.slug === product.slug)

        if (existingProduct){
            const { data } = await axios.patch(`/cart/${existingProduct.id}`,{quantity: existingProduct.quantity +1})
            dispatch(incQty(data))
        } else{
            const {data} = await axios.post('/cart',{...product, quantity: 1})
            dispatch(addToCart(data))
        }
    } catch (error) {
        console.log('add to cart error: ', error)
    }
}

export const asyncRemoveFromCart = (product) => async (dispatch) => {
    try {
        await axios.delete(`/cart/${product.id}`)
        dispatch(removeItem(product))
    } catch (error) {
        console.log('add to cart error: ', error)
    }
}

export const asyncIncreaseItemQty = (product) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`/cart/${product.id}`,{
            quantity: product.quantity + 1
        })
        dispatch(incQty(data))
    } catch (error) {
        console.log('increase item qty error: ', error)
    }
}

export const asyncDecreaseItemQty = (product) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`/cart/${product.id}`,{
            quantity: product.quantity - 1
        })
        dispatch(decQty(data))
    } catch (error) {
        console.log('decrease item qty error: ', error)
    }
}