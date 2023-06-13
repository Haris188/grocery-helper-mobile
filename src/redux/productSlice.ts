import { createSlice } from "@reduxjs/toolkit"
import { GlobalStateType } from './index'

export interface ProductStateType {
    cart: CartType
}

export interface ProductType {
    id: Number
    name: String
    brand: String
    vector: String
}

export interface StoreType {
    id: Number
    name: String
    postal_code: String
    location_id: Number
}

export interface MasterType {
    id: Number
    store_id: Number
    product_id: Number
    unit_price: Number
    unit: String
    unit_factor: Number
    currency: String
    product: ProductType
    store: StoreType
}

export interface CartType {
    [x: string]: ProductType
}

const sampleCart: CartType = {
    '1': {
        "id": 1,
        "name": "Round steak",
        "brand": "Meat Master",
        "vector": "v735165"
    }
}

const productSlice = createSlice({
    name: 'product',
    initialState: {
        cart: {}
    },
    reducers: {
        setCart(state: ProductStateType, { payload }: { payload: CartType }) {
            state.cart = payload
        },
    }
})

export const {
    setCart
} = productSlice.actions

export const cartSelector = (state: GlobalStateType) => state.product.cart
export default productSlice
