import React from 'react'
import { TextInput, Button, List, Avatar, Text } from 'react-native-paper'
import styled from 'styled-components/native'
import SafeContainer from '../../compenents/SafeContainer'
import { ScrollView } from 'react-native'
import { LocationType } from '../../redux/generalSlice'


export interface PropTypes {
    locations: LocationType[]
    handleLocationChange: (location_id: number) => void
}

const Container = styled.View`
    height: 100%;
`

export default (props: PropTypes) => {
    return (
        <SafeContainer>
            <Container>
                <List.Section>
                    <ScrollView>
                        {
                            props.locations.map(location=>(
                                <List.Item
                                    key={location.id}
                                    title={location.city}
                                    description={location.state}
                                    onPress={() => { props.handleLocationChange(location.id) }}
                                />
                            ))
                        }
                    </ScrollView>
                </List.Section>
            </Container>
        </SafeContainer>
    )
}