import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice/productsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer
    }
})