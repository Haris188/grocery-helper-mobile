import React from 'react'
import { Button, FAB, List, Text, TextInput } from 'react-native-paper'
import SafeContainer from '../../compenents/SafeContainer'
import styled from 'styled-components/native'
import { ScrollView, View } from 'react-native'
import { LocationType } from '../../redux/generalSlice'

interface PropTypes {
    locations: LocationType[]
    handleLocationPress: (locationId: number)=>void
}

const Container = styled.View`
    height: 100%;
`

export default (props: PropTypes) => {
    return (
        <SafeContainer>
            <Container>
                <List.Section>
                    <List.Subheader>Select Location</List.Subheader>
                    <ScrollView>
                        {
                            props.locations.map(row => (
                                <List.Item
                                    key={row.id.toString()}
                                    title={row.city}
                                    description={row.state}
                                    onPress={()=>{props.handleLocationPress(row.id)}}
                                />
                            ))
                        }
                    </ScrollView>
                </List.Section>
            </Container>
        </SafeContainer>
    )
}