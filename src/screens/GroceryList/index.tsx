import React, {useState} from 'react'
import View, { PropTypes } from './View'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../redux/productSlice'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { serverRequest } from '../../lib/utils'

export default () => {
    const shouldSearch = useState(true)

    const handleSearchChange = async (text: String) => {
        const result = await serverRequest('POST', '/product_list',{
            searchTerm: text
        })
        console.log(result)
    }

    return <View
        handleSearchChange={handleSearchChange}
    />
}