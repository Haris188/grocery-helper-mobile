import React from 'react'
import { Button, FAB, List, Text, TextInput } from 'react-native-paper'
import SafeContainer from '../../compenents/SafeContainer'
import styled from 'styled-components/native'
import { ScrollView, View } from 'react-native'
import { TotalValueType } from '../../redux/productSlice'

interface PropTypes {
    totalDetails: TotalValueType
}

const Container = styled.View`
    height: 100%;
`

export default (props: PropTypes) => {
    return (
        <SafeContainer>
            <Container>
                <List.Section>
                    <List.Subheader>Price Check Details ({props.totalDetails.store.name})</List.Subheader>
                    <ScrollView>
                        <List.Item
                            key={'total_area'}
                            title={<Text style={{fontWeight: 'bold'}}>Total</Text>}
                            right={() => (
                                <Text style={{fontWeight: 'bold'}}>${parseFloat(props.totalDetails.total.toString()).toFixed(2)}</Text>
                            )}
                        />
                        {
                            props.totalDetails.products.map(row => (
                                <List.Item
                                    key={row.id.toString()}
                                    title={`${row.name} (${row.unit_factor})`}
                                    right={() => (
                                        <Text>${parseFloat(row.total.toString()).toFixed(2)}</Text>
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