import React from 'react'
import { TextInput, Button, List, Avatar, Text, Checkbox } from 'react-native-paper'
import styled from 'styled-components/native'
import SafeContainer from '../../compenents/SafeContainer'
import { StoreType } from '../../redux/productSlice'


export interface PropTypes {
    stores: StoreType[]
    favouriteStoresIds: { [x: number]: number }
    handleStorePress: (storeId: number)=>void
}

const Container = styled.View`
    height: 100%;
`

export default (props: PropTypes) => {
    return (
        <SafeContainer>
            <Container>
                {
                    props.stores.map(store => (
                        <List.Item
                            key={store.id as number}
                            title={store.name}
                            description={store.location.city}
                            right={() => (
                                <Checkbox.IOS
                                    status={props.favouriteStoresIds[store.id as number]? 'checked': 'unchecked'}
                                />
                            )}
                            onPress={() => { props.handleStorePress(store.id as number) }}
                        />
                    ))
                }
            </Container>
        </SafeContainer>
    )
}