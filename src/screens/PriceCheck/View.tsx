import React from 'react'
import { Button, FAB, List, Text, TextInput } from 'react-native-paper'
import SafeContainer from '../../compenents/SafeContainer'
import styled from 'styled-components/native'
import { ScrollView, View } from 'react-native'
import { TotalType } from '../../redux/productSlice'
import { mapValues } from 'lodash'

interface PropTypes {
   total: TotalType,
   handleTotalPress: (storeId: number)=>void
}

const Container = styled.View`
    height: 100%;
`

export default (props: PropTypes) => {
    return (
        <SafeContainer>
            <Container>
                <List.Section>
                    <List.Subheader>Price Check</List.Subheader>
                    <ScrollView>
                        {
                            Object.values(props.total).map(row => (
                                <List.Item
                                    key={row.store.id}
                                    title={row.store.name}
                                    onPress={()=>{props.handleTotalPress(row.store.id)}}
                                    right={() => (
                                        <Text>${parseFloat(row.total).toFixed(2)}</Text>
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