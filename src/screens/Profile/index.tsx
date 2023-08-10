import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../../App'
import View from './View'
import { useSelector } from 'react-redux'
import { userSelector } from '../../redux/generalSlice'

export default () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
    const user = useSelector(userSelector)

    const navigate = (screen: keyof RootStackParams)=>{
        navigation.navigate(screen)
    }

    return user && <View
        currentLocation={`${user.default_location.city}, ${user.default_location.state}`}
        navigate={navigate}
    />
}