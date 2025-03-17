import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
    data: [],
    isLoading: false,
    error: true
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_VALUE,
    reducers: {
        isFetching:(state) => {
            return {
                ...state,
                isLoading: true,
                data: null
            }
        },
        success:(state, action) => {
            return{
                ...state,
                isLoading: false,
                error: false,
                data: action.payload
            }
        },
        isError:(state) => {
            return {
                ...state,
                isLoading: false,
                error: 'Ocurrio un error, porfa recarga',
                data: null
            }
        },
    },
})


export const {
    isFetching,
    success,
    isError
} = productsSlice.actions

export default productsSlice.reducer