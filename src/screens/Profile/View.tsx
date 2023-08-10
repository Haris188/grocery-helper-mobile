import React from 'react'
import { TextInput, Button, List, Avatar, Text } from 'react-native-paper'
import styled from 'styled-components/native'
import SafeContainer from '../../compenents/SafeContainer'


export interface PropTypes {

}

const Container = styled.View`
    height: 100%;
`

export default (props: PropTypes) => {
    return (
        <SafeContainer>
            <Container>
                
            </Container>
        </SafeContainer>
    )
}