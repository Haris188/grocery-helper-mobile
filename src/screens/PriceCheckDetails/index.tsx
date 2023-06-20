import React, {useState, useEffect} from 'react'
import View from './View'
import { 
    totalSelector
} from '../../redux/productSlice'
import { useSelector } from 'react-redux'
import { RouteProp } from '@react-navigation/native';
import {Text} from 'react-native-paper'

interface PropTypes {
    route: RouteProp<any, 'price_check'>
}

export default (props:PropTypes)=>{
    const total = useSelector(totalSelector)
    const params = props.route.params
    const totalDetails = total[params && params.storeId]

    return totalDetails ? (
        <View 
            totalDetails={totalDetails}
        />
    )
    : <Text>Loading</Text>
}
