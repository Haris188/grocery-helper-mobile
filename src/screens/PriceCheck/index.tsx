import React, {useState, useEffect} from 'react'
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
import { useNavigation } from '@react-navigation/native'

type TotalResponse = TotalType 
// & {
//     [x: number]: {
//         products: ProductType[]
//     }
// }

export default ()=>{
    const navigation = useNavigation()
    const cart = useSelector(cartSelector)
    const total = useSelector(totalSelector)
    const dispatch = useDispatch()

    useEffect(()=>{
        getTotal()
    },[])

    const getTotal = async ()=>{
        console.log('cart from total', cart)
        const cartProducts: {[key: number]: {factor: number}} = {}

        Object.values(cart).forEach(row=>{
            cartProducts[row.id as number] = {factor: row.unit_factor as number}
        })

        const payload = {
            location: 1,
            products: cartProducts
        }

        const total:TotalResponse = await serverRequest('POST', '/get_total', payload)

        // console.log(total)
        // const totalWithProdIdsOnly: TotalType = {}

        // forEach(total, (totalRow)=>{
        //     totalWithProdIdsOnly[totalRow.store.id as number] = {
        //         ...totalRow,
        //         products: totalRow.products.map((i: ProductType) =>i.vector.toString())
        //     }
        // })

        dispatch(setTotal(total))
    }

    const handleTotalPress = (storeId: number)=>{
        navigation.navigate('price_check_details', {
            storeId
        })
    }

    return (
        <View 
            total={total}
            handleTotalPress={handleTotalPress}
        />
    )
}
