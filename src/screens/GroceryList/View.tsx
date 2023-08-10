import React from 'react'
import { TextInput, Button, List, Avatar, TouchableRipple } from 'react-native-paper'
import styled from 'styled-components/native'
import SafeContainer from '../../compenents/SafeContainer'
import { ScrollView, View } from 'react-native'
import { CartType, ProductType } from '../../redux/productSlice'
import { NavigationProp } from '@react-navigation/native'
import FabButton from '../../compenents/FabButton'
import { RootStackParams } from '../../../App'

export interface PropTypes {
    handleSearchChange: (text: String) => void
    searchList: ProductType[]
    addToCart: (product: ProductType) => void
    deleteFromCart: (product: ProductType) => void
    cart: CartType
    handleCartPress: () => void
    navigate: (screen: keyof RootStackParams) => void
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
                    onPress={() => { props.handleCartPress() }}
                >
                    {Object.keys(props.cart).length}
                </FabButton>}

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <TextInput
                        style={{ flex: 0.8 }}
                        label={'Search'}
                        onEndEditing={(e) => { props.handleSearchChange(e.nativeEvent.text) }}
                    />
                    <View style={{ flex: 0.2, justifyContent: 'flex-end', flexDirection: 'row' }} >
                        <TouchableRipple onPress={()=>{props.navigate('profile')}} >
                            <Avatar.Text
                                label='H'
                                size={50}
                            />
                        </TouchableRipple>
                    </View>
                </View>


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