import React, {useState} from 'react'
import View, { PropTypes } from './View'
import { useSelector } from 'react-redux'
import { ProductType } from '../../redux/productSlice'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { serverRequest } from '../../lib/utils'

export default () => {
    const shouldSearch = useState(true)
    const [searchList, setSearchList] = useState<ProductType[]>([])

    const handleSearchChange = async (text: String) => {
        const result = await serverRequest('POST', '/product_list',{
            searchTerm: text
        })
        
        setSearchList(result || [])
    }

    console.log(searchList.length)

    return <View
        handleSearchChange={handleSearchChange}
        searchList={searchList}
    />
}