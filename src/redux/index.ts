import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import productSlice, { ProductStateType } from './productSlice'

export interface GlobalStateType {
    product: ProductStateType
}

const reducers = combineReducers<GlobalStateType>({
    product: productSlice.reducer
})

export const store = configureStore({
    reducer: reducers,
})