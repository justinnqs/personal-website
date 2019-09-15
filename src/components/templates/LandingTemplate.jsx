import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../organisms/NavBar';

const WrapperDiv = styled.div `
    background-color: ${props => props.theme.background};
    height: 100vh;
    width: 100vw;
`

const LandingTemplate = (props) => {
    return(
        <WrapperDiv>
            <NavBar></NavBar>
        </WrapperDiv>
    )
}

export default LandingTemplate;