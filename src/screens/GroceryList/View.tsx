import React from 'react'
import { TextInput, Button } from 'react-native-paper'
import styled from 'styled-components/native'
import SafeContainer from '../../compenents/SafeContainer'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

export interface PropTypes {
    handleSearchChange: (text:String) => void
}

const Container = styled.View`
`

export default (props: PropTypes)=>{
    return (
        <SafeContainer>
            <Container>
                <TextInput 
                    label={'Search'}
                    onEndEditing={(e)=>{props.handleSearchChange(e.nativeEvent.text)}}
                />
            </Container>
        </SafeContainer>
    )
}