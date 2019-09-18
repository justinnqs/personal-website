import React from 'react';
import styled from 'styled-components';

const LandingTemplateContainer = styled.div `
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 0;
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

const LandingTemplate = (props) => {
    return(
        <LandingTemplateContainer>
            <TitleContainer>
                {props.children[0]}
                <DescriptionContainer>
                    {props.children[1]}
                </DescriptionContainer>
            </TitleContainer>
            
        </LandingTemplateContainer>
    );
}

export default LandingTemplate;