import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section `
    position: relative;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.background};
    top: 100vh;
    padding-top: 6.5rem;
`

const TitleContainer = styled.div `
    margin-left: 8rem;
    width: 25rem;
`

const ContactTemplate = (props) => {
    return(
        <ContactContainer>
            <TitleContainer>
                {props.children}
            </TitleContainer>
        </ContactContainer>
    )
}

export default ContactTemplate;