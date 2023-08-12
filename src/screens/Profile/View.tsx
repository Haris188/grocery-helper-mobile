import React from 'react'
import { TextInput, Button, List, Avatar, Text } from 'react-native-paper'
import styled from 'styled-components/native'
import SafeContainer from '../../compenents/SafeContainer'
import { ScrollView } from 'react-native'
import { RootStackParams } from '../../../App'


export interface PropTypes {
    currentLocation: string
    navigate: (screen: keyof RootStackParams) => void
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
                        <List.Item
                            title='My Location'
                            description={props.currentLocation}
                            onPress={()=>{props.navigate('my_location')}}
                        />
                        <List.Item
                            title='Favourite Stores'
                            description='Select your favourite stores'
                            onPress={()=>{props.navigate('favourite_stores')}}
                        />
                    </ScrollView>
                </List.Section>
            </Container>
        </SafeContainer>
    )
}