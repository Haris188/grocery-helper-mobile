import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../../App'
import View from './View'
import { useDispatch, useSelector } from 'react-redux'
import { locationsSelector, setUser } from '../../redux/generalSlice'
import { serverRequest } from '../../lib/utils'

export default () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
    const locations = useSelector(locationsSelector)
    const dispatch = useDispatch()

    const handleLocationChange = async (location_id: number)=>{
        const result = await serverRequest('GET', `/update_def_location/${location_id}`)
        dispatch(setUser(result))
        navigation.pop()
    }

    return <View 
        locations={Object.values(locations)}
        handleLocationChange={handleLocationChange}
    />
}