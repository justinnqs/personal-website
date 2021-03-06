import React from 'react';
import styled from 'styled-components';
import { NavBarItems } from '../molecules/NavBarItems';
import { DefaultButtonStyle } from '../atoms/Buttons';
import { DefaultLinkStyle } from '../atoms/Links';
import { Logo } from '../atoms/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarContainer = styled.header `
    position: fixed;
    width: 100%;
    height: 6.5rem;
    margin: 0 auto;
    z-index: 2;
    background-color: ${props => props.theme.background};
`
const LeftSide = styled.span `
    margin-left: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    float: left;
    height: 100%;
`

const RightSide = styled.span `
    margin-right: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    float: right;
    height: 100%;
`

const NavLink = styled(DefaultLinkStyle) `
    padding: 0 1rem;
`
export const NavBar = () => {
    return(
       <NavBarContainer>
           <LeftSide>
            <NavBarItems>
                <NavLink href="/#home"><Logo>J.S.</Logo></NavLink>
                <NavLink href="/#projects">Projects</NavLink>
                <NavLink href="/#contact">Contact</NavLink>
            </NavBarItems>
           </LeftSide>
           <RightSide>
            <NavBarItems>
                <NavLink>Resume</NavLink>
                <NavLink href="https://github.com/justinnqs?tab=repositories">
                    <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                </NavLink>
                <NavLink href="https://www.linkedin.com/in/justin-sian-44ba06129/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                </NavLink>
                {/* <DefaultButtonStyle>Don't Click</DefaultButtonStyle> */}
            </NavBarItems>
           </RightSide>
       </NavBarContainer> 
    );
}