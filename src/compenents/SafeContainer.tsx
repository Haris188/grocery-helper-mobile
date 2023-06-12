import React,{ReactElement} from 'react'
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
    padding: 20px;
    padding-top: 50px;
    height: 100%;
    width: 100%;
`

const SafeContainer = ({children}: {children: ReactElement})=>{
    return <Container>
        {children}
    </Container>
}

export default SafeContainer