import React, { useState, useEffect } from 'react'
import View from './View'
import {
    cartSelector,
    totalSelector,
    setTotal,
    TotalType,
    ProductType
} from '../../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { serverRequest } from '../../lib/utils'
import { forEach, mapValues } from 'lodash'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { locationsSelector, userSelector } from '../../redux/generalSlice'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../../App'

type TotalResponse = TotalType

interface PropTypes {
    route: RouteProp<any, 'price_check'>
}

export default (props: PropTypes) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
    const cart = useSelector(cartSelector)
    const total = useSelector(totalSelector)
    const user = useSelector(userSelector)
    const locations = useSelector(locationsSelector)
    const dispatch = useDispatch()
    const searchLocation = props?.route.params?.locationId

    console.log('searchLocation', searchLocation, user.default_location.id)

    // useEffect(()=>{
    //     setSearchLocation(props?.route.params?.locationId)
    // }, [props.route.params?.locationId])

    useEffect(() => {
        getTotal()
    }, [searchLocation])

    const getTotal = async () => {
        const cartProducts: { [key: number]: { factor: number } } = {}

        Object.values(cart).forEach(row => {
            cartProducts[row.id as number] = { factor: row.unit_factor as number }
        })

        const payload = {
            location: searchLocation,
            products: cartProducts
        }

        const total: TotalResponse = await serverRequest('POST', '/get_total', payload)

        dispatch(setTotal(total))
    }

    const handleTotalPress = (storeId: number) => {
        navigation.navigate('price_check_details', {
            storeId
        })
    }

    const handleLocationPress = () => {
        navigation.navigate('select_location')
    }

    let orderedTotal:TotalType = {}
    if (total && Object.keys(total).length > 0) {
        if (user.favourite_stores) {
            for (var i of user.favourite_stores) {
                if(total[i]){
                    console.log(i)
                    orderedTotal[i] = {...total[i]}
                    delete total[i]
                }
            }
        }

        console.log(orderedTotal)

        orderedTotal = {...orderedTotal, ...total}
    }

    return (
        <View
            total={orderedTotal}
            handleTotalPress={handleTotalPress}
            searchLocation={locations[searchLocation]}
            handleLocationPress={handleLocationPress}
        />
    )
}
