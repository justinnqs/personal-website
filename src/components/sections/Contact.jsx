import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../atoms/Headers';

const ContactContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.background};
    padding-top: 6.5rem;
`

const TitleContainer = styled.div `
    margin-left: 8rem;
    width: 25rem;
`

const Contact = () => {
    return(
        <ContactContainer>
            <TitleContainer>
                <PageTitle>Contact</PageTitle>
            </TitleContainer>
        </ContactContainer>
    );
}

export default Contact;