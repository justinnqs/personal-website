import React from 'react';
import styled from 'styled-components';

const ProjectCarouselContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ProjectContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const ProjectCarousel = (props) => {
    return(
        <ProjectCarouselContainer>
            <ProjectContainer>
                {props.children}
            </ProjectContainer>
        </ProjectCarouselContainer>
    );
}