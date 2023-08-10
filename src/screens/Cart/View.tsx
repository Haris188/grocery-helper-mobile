import React from 'react'
import { Button, FAB, List, Text, TextInput } from 'react-native-paper'
import SafeContainer from '../../compenents/SafeContainer'
import styled from 'styled-components/native'
import { ScrollView, View } from 'react-native'
import { CartType, ProductType } from '../../redux/productSlice'
import { NavigationProp } from '@react-navigation/native'

interface PropTypes {
    cart: CartType
    deleteFromCart: (product: ProductType) => void
    handleQuantityChange: (vector: string, unit_factor: string) => void
    handePriceCheckPress: ()=>void
}

const Container = styled.View`
    height: 100%;
`
const FlexView = styled.View`
    flexDirection: row;
    flex: 1;
    justifyContent: flex-end;
    alignItems: center;
`

export default (props: PropTypes) => {
    return (
        <SafeContainer>
            <Container>
                {Object.keys(props.cart).length > 0 && <FAB
                    icon='check'
                    onPress={() => {props.handePriceCheckPress() }}
                    style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
                />}
                <List.Section>
                    <List.Subheader>My Cart</List.Subheader>
                    <ScrollView>
                        {
                            Object.values(props.cart).map(row => (
                                <List.Item
                                    key={row.id.toString()}
                                    title={row.name}
                                    description={row.brand}
                                    right={() => (
                                        <FlexView >
                                            <TextInput
                                                value={row.unit_factor?.toString() || '1'}
                                                right={<TextInput.Affix text={row?.unit?.toString() || '.'} />}
                                                keyboardType='numeric'
                                                onChangeText={(text) => { props.handleQuantityChange(row.vector.toString(), text) }}
                                            />
                                            <Button onPress={() => { props.deleteFromCart(row) }}>Delete</Button>
                                        </FlexView>
                                    )}
                                />
                            ))
                        }
                    </ScrollView>
                </List.Section>
            </Container>
        </SafeContainer>
    )
}