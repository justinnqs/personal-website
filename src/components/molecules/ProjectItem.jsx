import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

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
    height: 35rem;
    width: 35rem;
    overflow: hidden;
`

export const ProjectItem = (props) => {
    return(
        <ProjectLink to={props.path}>
            <ImageContainer>
                <Img fluid={props.image.childImageSharp.fluid} style={{width: 360, height: 360}}/>
            </ImageContainer>
        </ProjectLink>
    );
}