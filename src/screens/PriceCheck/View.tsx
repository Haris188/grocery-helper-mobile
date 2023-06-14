import React from 'react'
import { Button, FAB, List, Text, TextInput } from 'react-native-paper'
import SafeContainer from '../../compenents/SafeContainer'
import styled from 'styled-components/native'
import { ScrollView, View } from 'react-native'
import { CartType, ProductType } from '../../redux/productSlice'

interface PropTypes {
   
}

const Container = styled.View`
    height: 100%;
`

export default (props: PropTypes) => {
    return (
        <SafeContainer>
            <Container>
                {/* <FAB 
                    icon='check'
                    onPress={()=>{console.log('press')}}
                    style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
                />
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
                </List.Section> */}
            </Container>
        </SafeContainer>
    )
}