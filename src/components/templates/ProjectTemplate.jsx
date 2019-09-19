import React from 'react';
import styled from 'styled-components';
import { ProjectItem } from '../molecules/ProjectItem';
import { ProjectCarousel } from '../organisms/ProjectCarousel';

const ProjectContainer = styled.section`
    position: relative;
    top: 100vh;
    background: ${props => props.theme.background};
    padding-top: 6.5rem;
    width: 100vw;
`

const TitleContainer = styled.div `
    margin-left: 8rem;
    width: 25rem;
`

const ProjectTemplate = (props) => {
    return(
        <ProjectContainer>
            <TitleContainer>
                {props.children}
            </TitleContainer>
            <ProjectCarousel>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </ProjectCarousel>
        </ProjectContainer>
    );
}

export default ProjectTemplate