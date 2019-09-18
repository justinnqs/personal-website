import React from 'react';
import styled from 'styled-components';

const NavBarItemsContainer = styled.span `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const NavBarItems = (props) => {
    return(
        <NavBarItemsContainer>
            {props.children}
        </NavBarItemsContainer>
    );
}