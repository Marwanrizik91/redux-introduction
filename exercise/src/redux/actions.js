import { ADD_PRODUCT, INCREMENT_PRODUCT, DECREMENT_PRODUCT } from './constants'

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: {
        name: product.name,
        price: product.price
    }
})

export const incrementProduct = (name) => ({
    type: INCREMENT_PRODUCT,
    payload: {
        name
    }
})

export const decrementProduct = (name) => ({
    type: DECREMENT_PRODUCT,
    payload: {
        name
    }
})