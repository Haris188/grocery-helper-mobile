import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../../App'
import View from './View'
import { StoreType } from '../../redux/productSlice'
import { serverRequest } from '../../lib/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setupInitialState, userSelector } from '../../redux/generalSlice'

export default () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
    const [stores, setStores] = useState<StoreType[]>([])
    const favouriteStoresIds = useSelector(userSelector).favourite_stores?.map(v=>({[v]:v})) || []
    const dispatch = useDispatch()

    useEffect(()=>{
        getStores()
    },[])

    const getStores = async ()=>{
        const result = await serverRequest('GET', '/stores')
        if(!result) return setStores([])

        setStores(Object.values(result) as StoreType[])
    }

    const handleStorePress = async (storeId: number) => {
        const toSave = Object.assign({}, ...favouriteStoresIds)

        if(toSave[storeId]){
            delete toSave[storeId]
        }
        else{
            toSave[storeId] = storeId
        }

        const result = await serverRequest('POST', '/set_favourite_stores', Object.values(toSave))
        setupInitialState(dispatch)
    }

    return (stores && favouriteStoresIds) ? <View 
        stores={stores}
        favouriteStoresIds={Object.assign({}, ...favouriteStoresIds)}
        handleStorePress={handleStorePress}
    />
    : <></>
}