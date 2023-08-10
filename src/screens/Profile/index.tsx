import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../../App'
import View from './View'

export default () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

    return <View />
}