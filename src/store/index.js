import {configureStore} from '@reduxjs/toolkit'
import productsGlobal from './slices/product.slice'
import cartGlobal from './slices/cart.slice'

const store = configureStore({
    reducer: {
        productsGlobal,
        cartGlobal,
    }
})

export default store