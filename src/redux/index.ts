import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import productSlice, { ProductStateType } from './productSlice'
import generalSlice, {GeneralStateType} from './generalSlice'

export interface GlobalStateType {
    product: ProductStateType
    general: GeneralStateType
}

const reducers = combineReducers<GlobalStateType>({
    product: productSlice.reducer,
    general: generalSlice.reducer
})

export const store = configureStore({
    reducer: reducers,
})