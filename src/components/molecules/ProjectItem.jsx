import React from 'react';
import styled from 'styled-components';
import Image from '../image';
import { Link } from "gatsby";

const ProjectLink = styled(Link) `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 0.4rem solid ${props => props.theme.highlight};
    border-radius: 50%;
    height: 35rem;
    width: 35rem;
    overflow: hidden;
    margin: 2rem;
    cursor: pointer;
    
    &:hover {
        
    }
`

const ImageContainer = styled.div `
    position: relative;
    top: -1px;
    height: 34rem;
    width: 35rem;
`

export const ProjectItem = (props) => {
    return(
        <ProjectLink>
            <ImageContainer>
                <Image />
            </ImageContainer>
        </ProjectLink>
    );
}