import React from 'react'
import View from './View'
import {ProductType, cartSelector, deleteFromCart, setCart  } from '../../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export default ()=>{
    const cart = useSelector(cartSelector)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const deleteProductFromCart = (product: ProductType)=>{
        dispatch(deleteFromCart(product))
    }

    const handleQuantityChange = (vector: string, unit_factor: string)=>{
        const unit_factor_int = parseInt(unit_factor || '0')
        const tempCart = {...cart}

        tempCart[vector].unit_factor = unit_factor_int
        dispatch(setCart(tempCart))
    }

    return (
        <View 
            cart={cart}
            deleteFromCart={deleteProductFromCart}
            handleQuantityChange={handleQuantityChange}
            navigation={navigation}
        />
    )
}
