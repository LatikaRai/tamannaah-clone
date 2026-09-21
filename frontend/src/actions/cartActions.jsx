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

export const asyncAddToCart = (product) => async (dispatch) => {
    try {
        const { data } = await axios.post('/cart',product)
        dispatch(addToCart(data))
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
        const { data } = await axios.post('/cart',product)
        dispatch(incQty(data))
    } catch (error) {
        console.log('increase item qty error: ', error)
    }
}

export const asyncDecreaseItemQty = (product) => async (dispatch) => {
    try {
        const { data } = await axios.post('/cart',product)
        dispatch(decQty(data))
    } catch (error) {
        console.log('decrease item qty error: ', error)
    }
}