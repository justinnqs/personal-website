import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { invertTheme } from '../atoms/Theme';

const LandingContainer = styled.section `
    position: fixed;
    z-index: 0;
`

const ContentContainer = styled.div `
    position: relative;
    top: 100vh;
    z-index: 1;
`

const ProjectsContainer = styled.section `
`

const ContactContainer = styled.section `
`

const IndexTemplate = (props) => {
    return(
        <React.Fragment>
            <LandingContainer>{props.children[0]}</LandingContainer>
            <ThemeProvider theme={ invertTheme }>
            <ContentContainer>
                <ProjectsContainer>
                    {props.children[1]}
                </ProjectsContainer>
                {/* <ContactContainer>
                    {props.children[2]}
                </ContactContainer> */}
            </ContentContainer> 
            </ThemeProvider>
        </React.Fragment>
    );
}

export default IndexTemplate;