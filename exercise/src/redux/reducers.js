import { ADD_PRODUCT, INCREMENT_PRODUCT, DECREMENT_PRODUCT } from "./constants";
import { combineReducers } from "redux";
import { v4 } from "uuid";



const initialState = {
    items: [],
    quantity: 1,
};

function productReducer(state = initialState , action) {
    switch (action.type) {
        case ADD_PRODUCT: {
            const { name, price } = action.payload;
            return {
                ...state,
                items: [...state.items, { name , id: v4(), quantity: 1 }],
                price
            };
        }
        case INCREMENT_PRODUCT: {
            const { name } = action.payload;
            return {
                ...state,
                items: state.items.map((item) => ({
                    ...item,
                    quantity: item.name === name ? item.quantity + 1: item.quantity
                }))
            };
        }

        case DECREMENT_PRODUCT: {
            const { name } = action.payload;
            return {
                ...state,
                items: state.items.map((item) => ({
                    ...item,
                    quantity: item.name === name ? item.quantity - 1: item.quantity
                }))
            };
        }
        default:
            return state;
    }
}

export default combineReducers({ productReducer })