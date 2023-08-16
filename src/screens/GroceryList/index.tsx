import React, {useState, useEffect} from 'react'
import View, { PropTypes } from './View'
import { useSelector, useDispatch } from 'react-redux'
import { 
    ProductType, 
    cartSelector, 
    setCart,
    deleteFromCart
 } from '../../redux/productSlice'
import { serverRequest } from '../../lib/utils'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../../App'

export default () => {
    const shouldSearch = useState(true)
    const [searchList, setSearchList] = useState<ProductType[]>([])
    const cart = useSelector(cartSelector)
    const dispatch = useDispatch()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

    useEffect(()=>{
        handleSearchChange('')
    },[])

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

    const deleteProductFromCart = (product: ProductType)=>{
        dispatch(deleteFromCart(product))
    }

    const handleCartPress = ()=>{
        navigation.navigate('cart')
    }

    const navigate = (screen: keyof RootStackParams)=>{
        navigation.navigate(screen)
    }

    return <View
        handleSearchChange={handleSearchChange}
        searchList={searchList}
        addToCart={addToCart}
        deleteFromCart={deleteProductFromCart}
        cart={cart}
        handleCartPress={handleCartPress}
        navigate={navigate}
    />
}