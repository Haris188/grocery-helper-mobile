import React, {useState, useEffect} from 'react'
import View from './View'
import { useSelector } from 'react-redux'
import { locationsSelector } from '../../redux/generalSlice'
import { values } from 'lodash'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../../App'


export default ()=>{
    const locationMap = useSelector(locationsSelector)
    const locationArr = values(locationMap)
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

    const handleLocationPress = (locationId: number)=>{
        navigation.navigate('price_check', {
            locationId
        })
    }

    return  (
        <View 
            locations={locationArr}
            handleLocationPress={handleLocationPress}
        />
    )
}
