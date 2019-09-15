import React from 'react';
import styled from 'styled-components';
import { NavBarItems } from '../molecules/NavBarItems';
import { DefaultButtonStyle } from '../atoms/Buttons';
import { DefaultLinkStyle } from '../atoms/Links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarContainer = styled.div `
    width: 80%;
    height: 6rem;
    margin: 0 auto;
`
const LeftSide = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    float: left;
    width: 25%;
    height: 100%;
`

const RightSide = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    float: right;
    width: 30%;
    height: 100%;
`

export const NavBar = () => {
    return(
       <NavBarContainer>
           <LeftSide>
            <NavBarItems>
                <DefaultLinkStyle>Home</DefaultLinkStyle>
                <DefaultLinkStyle>Deployed</DefaultLinkStyle>
                <DefaultLinkStyle>Contact</DefaultLinkStyle>
            </NavBarItems>
           </LeftSide>
           <RightSide>
            <NavBarItems>
                <DefaultLinkStyle>Resume</DefaultLinkStyle>
                <DefaultLinkStyle href="https://github.com/justinnqs?tab=repositories">
                    <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                </DefaultLinkStyle>
                <DefaultLinkStyle href="https://www.linkedin.com/in/justin-sian-44ba06129/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                </DefaultLinkStyle>
                <DefaultButtonStyle>Egg Finder</DefaultButtonStyle>
            </NavBarItems>
           </RightSide>
       </NavBarContainer> 
    );
}