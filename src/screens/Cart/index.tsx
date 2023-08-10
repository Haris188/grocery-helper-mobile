import React from 'react'
import View from './View'
import {ProductType, cartSelector, deleteFromCart, setCart  } from '../../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../../App'

export default ()=>{
    const cart = useSelector(cartSelector)
    const dispatch = useDispatch()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

    const deleteProductFromCart = (product: ProductType)=>{
        dispatch(deleteFromCart(product))
    }

    const handleQuantityChange = (vector: string, unit_factor: string)=>{
        const unit_factor_int = parseInt(unit_factor || '0')
        const tempCart = {...cart}

        tempCart[vector].unit_factor = unit_factor_int
        dispatch(setCart(tempCart))
    }

    const handePriceCheckPress = ()=>{
        navigation.navigate('price_check', {
            locationId: 1
        }) 
    }

    return (
        <View 
            cart={cart}
            deleteFromCart={deleteProductFromCart}
            handleQuantityChange={handleQuantityChange}
            handePriceCheckPress={handePriceCheckPress}
        />
    )
}
