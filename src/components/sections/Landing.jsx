import React from 'react';
import styled from 'styled-components';
import { Title, SubTitle } from '../atoms/Headers';

const LandingContainer = styled.div `
    width: 100vw;
    height: 100vh;
`

const TitleContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
`

const DescriptionContainer = styled.div `

`

const Landing = (props) => {
    return(
        <LandingContainer>
            <TitleContainer>
                <Title>Justin Sian</Title>
                <DescriptionContainer>
                    <SubTitle>Software Engineer</SubTitle>
                </DescriptionContainer>
            </TitleContainer>
        </LandingContainer>
    );
}

export default Landing;