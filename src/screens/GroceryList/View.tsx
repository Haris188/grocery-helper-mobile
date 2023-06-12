import React from 'react'
import { TextInput, Button, List, Text } from 'react-native-paper'
import styled from 'styled-components/native'
import SafeContainer from '../../compenents/SafeContainer'
import { ScrollView } from 'react-native'
import { ProductType } from '../../redux/productSlice'

export interface PropTypes {
    handleSearchChange: (text: String) => void
    searchList: ProductType[]
}

const Container = styled.View`
`

export default (props: PropTypes) => {
    return (
        <SafeContainer>
            <Container>
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
                                    right={props => (<Button {...props}>Add</Button>)}
                                />
                            ))
                        }
                    </ScrollView>
                </List.Section>
            </Container>
        </SafeContainer>
    )
}