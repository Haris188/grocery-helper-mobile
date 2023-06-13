import React from 'react'
import { Text } from 'react-native-paper'
import SafeContainer from '../../compenents/SafeContainer'
import styled from 'styled-components/native'

const Container = styled.View`
    height: 100%;
`

export default ()=>{
    return (
        <SafeContainer>
            <Container>
                <Text>test</Text>
            </Container>
        </SafeContainer>
    )
}