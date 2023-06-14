import React from 'react'
import { TextInput, Button, List, Text } from 'react-native-paper'
import styled from 'styled-components/native'
import SafeContainer from '../../compenents/SafeContainer'
import { ScrollView } from 'react-native'
import { CartType, ProductType } from '../../redux/productSlice'
import { NavigationProp } from '@react-navigation/native'
import FabButton from '../../compenents/FabButton'

export interface PropTypes {
    handleSearchChange: (text: String) => void
    searchList: ProductType[]
    addToCart: (product: ProductType) => void
    deleteFromCart: (product: ProductType) => void
    cart: CartType
    navigation: NavigationProp<ReactNavigation.RootParamList>
}

const Container = styled.View`
    height: 100%;
`

export default (props: PropTypes) => {
    return (
        <SafeContainer>
            <Container>
                {Object.keys(props.cart).length > 0 && <FabButton
                    icon='cart'
                    mode='contained'
                    onPress={() => { props.navigation.navigate('cart') }}
                >
                    {Object.keys(props.cart).length}
                </FabButton>}

                <TextInput
                    label={'Search'}
                    onEndEditing={(e) => { props.handleSearchChange(e.nativeEvent.text) }}
                />
                <List.Section>
                    <List.Subheader>Items</List.Subheader>
                    <ScrollView>
                        {
                            props.searchList.map(row => (
                                <List.Item
                                    key={row.id.toString()}
                                    title={row.name}
                                    description={row.brand}
                                    right={() =>
                                        props.cart[row.vector.toString()]
                                            ? (<Button onPress={() => { props.deleteFromCart(row) }}>Delete</Button>)
                                            : (<Button onPress={() => { props.addToCart(row) }}>Add</Button>)
                                    }
                                />
                            ))
                        }
                    </ScrollView>
                </List.Section>
            </Container>
        </SafeContainer>
    )
}