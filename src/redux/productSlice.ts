import { createSlice } from "@reduxjs/toolkit"
import { GlobalStateType } from './index'
import { LocationType } from "./generalSlice"

export interface ProductStateType {
    cart: CartType,
    total: TotalType
}

export interface ProductType {
    id: Number
    name: String
    brand: String
    vector: String,
    unit?: String
    unit_factor?: Number
}

export interface StoreType {
    id: Number
    name: String
    postal_code: String
    location_id: Number
    location: LocationType
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

export interface TotalValueType {
    store: StoreType
    total: number
    products: (ProductType & {total: number})[]
}

export interface TotalType{
    [x: number]: TotalValueType
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
        cart: {},
        total: {}
    },
    reducers: {
        setCart(state: ProductStateType, { payload }: { payload: CartType }) {
            state.cart = payload
        },
        deleteFromCart(state: ProductStateType, { payload }: { payload: ProductType }) {
            const tempCart = { ...state.cart }
            delete tempCart[payload.vector.toString()]
            state.cart = tempCart
        },
        setTotal(state: ProductStateType, { payload }: { payload: TotalType }) {
            state.total = payload
        },
    }
})

export const {
    setCart,
    deleteFromCart,
    setTotal
} = productSlice.actions

export const cartSelector = (state: GlobalStateType) => state.product.cart
export const totalSelector = (state: GlobalStateType) => state.product.total
export default productSlice
