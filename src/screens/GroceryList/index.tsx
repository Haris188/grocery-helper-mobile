import React, {useState} from 'react'
import View, { PropTypes } from './View'
import { useSelector, useDispatch } from 'react-redux'
import { ProductType, cartSelector, setCart } from '../../redux/productSlice'
import { serverRequest } from '../../lib/utils'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const shouldSearch = useState(true)
    const [searchList, setSearchList] = useState<ProductType[]>([])
    const cart = useSelector(cartSelector)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    console.log('cart', cart)

    const handleSearchChange = async (text: String) => {
        const result = await serverRequest('POST', '/product_list',{
            searchTerm: text
        })
        
        setSearchList(result || [])
    }

    const addToCart = (product: ProductType)=>{
        const tempCart = {...cart}
        tempCart[product.vector.toString()] = product
        dispatch(setCart(tempCart))
    }

    const deleteFromCart = (product: ProductType)=>{
        const tempCart = {...cart}
        delete tempCart[product.vector.toString()]
        dispatch(setCart(tempCart))
    }

    console.log(searchList.length)

    return <View
        handleSearchChange={handleSearchChange}
        searchList={searchList}
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
        cart={cart}
        navigation={navigation}
    />
}