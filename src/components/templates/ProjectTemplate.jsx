import React from 'react';
import styled from 'styled-components';

const ProjectSpacer = styled.div `
    position: relative;
    top: 100vh;
`

const ProjectContainer = styled.div `
    height: 100vh;
    width: 100vw;
`

const ChildrenContainer = styled.div `
    position: relative;
    top: 6.5rem;
    background: ${props => props.theme.background};
    height: 55rem;
`

const TitleContainer = styled.div `
    margin-left: 6rem;
    width: 15%;
    color: ${props => props.theme.background};
`


const ProjectTemplate = (props) => {
    return(
        <ProjectSpacer>
            <ProjectContainer>
                <ChildrenContainer>
                    <TitleContainer>
                        {props.children}
                    </TitleContainer>
                </ChildrenContainer>
            </ProjectContainer>
        </ProjectSpacer>
    );
}

export default ProjectTemplate