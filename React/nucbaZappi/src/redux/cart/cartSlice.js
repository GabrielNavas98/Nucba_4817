import { createSlice } from "@reduxjs/toolkit";
import { SHIPPING_COST } from "../../utils/constants";
import { addItemToCart, removeItemFromCart, resetShippingCost } from "./cartUtils";

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    hidden: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers:{
        addToCart: (state, action) => {
            return {    
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                shippingCost: SHIPPING_COST
            }
        },
        removeFromCart: (state, action) =>{
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
            }
        },
        clearCart: (state) => {
            return{
                ...state,
                cartItems: [],
                shippingCost: 0
            }
        },
        toggleHiddenCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    clearCart,
    toggleHiddenCart
} = cartSlice.actions

export default cartSlice.reducer