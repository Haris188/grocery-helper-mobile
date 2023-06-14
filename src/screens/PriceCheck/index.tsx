import React from 'react'
import View from './View'
import {ProductType, cartSelector, deleteFromCart, setCart  } from '../../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux'

export default ()=>{
    const cart = useSelector(cartSelector)
    const dispatch = useDispatch()

    return (
        <View 
        />
    )
}
