//redux-toolkit
import {combineReducers, configureStore} from '@reduxjs/toolkit'

//redux-persist
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";

//Reducers
import categoriesReducer from './categories/categoriesSlice'
import productsReducer from './products/productsSlice'
import recommendedReducer from './recommended/recommendedSlice'
import cartReducer from './cart/cartSlice'
import userReducer from './user/userSlicer'

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    recommended: recommendedReducer,
    cart: cartReducer,
    user: userReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    // para que no salga el warni de serializable por redux persit
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})


export const persistor = persistStore(store)