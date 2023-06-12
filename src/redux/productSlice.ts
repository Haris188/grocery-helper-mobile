import { createSlice } from "@reduxjs/toolkit"
import {GlobalStateType} from './index'

export interface ProductStateType {
    cart: ProductType[]
}

export interface ProductType{
    id: Number
    name: String
    brand: String
    unit: String
    currency: String
    vector: String
    unit_price: Number
}

const sampleCart: ProductType[] = [
    {
        id:1,
        name: 'Sample Product',
        brand: 'Sample Brand',
        unit: 'kg',
        currency: 'CAD',
        vector: 'sdf3234',
        unit_price: 3.3
    }
]

const productSlice = createSlice<ProductStateType,any,any>({
    name: 'product',
    initialState: {
        cart: sampleCart
    },
    reducers: {
        setCart(state:ProductStateType, { payload }: {payload:ProductType[]}) {
            state.cart = payload
        },
    }
})

export const {
    setCart
} = productSlice.actions

export const cartSelector = (state:GlobalStateType) => state.product.cart
export default productSlice
