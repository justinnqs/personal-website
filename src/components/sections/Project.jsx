import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../atoms/Headers';
import { ProjectItem } from '../molecules/ProjectItem';
import { ProjectCarousel } from '../organisms/ProjectCarousel';

const ProjectContainer = styled.div`
    background: ${props => props.theme.background};
    padding-top: 6.5rem;
    width: 100vw;
`

const TitleContainer = styled.div `
    margin-left: 8rem;
    width: 25rem;
`

const Project = () => {
    return(
        <ProjectContainer>
            <TitleContainer>
                <PageTitle>Projects</PageTitle>
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

export default Project;