import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../atoms/Headers';
import { ProjectItem } from '../molecules/ProjectItem';
import { ProjectCarousel } from '../organisms/ProjectCarousel';
import { StaticQuery, graphql } from 'gatsby';

const ProjectContainer = styled.div`
    background: ${props => props.theme.background};
    padding-top: 3rem;
    width: 100vw;
    min-height: 100vh;
`

const TitleContainer = styled.div `
    margin-left: 8rem;
    width: 25rem;
`

const Project = () => {
    return(
        <StaticQuery
            query={graphql`
            query ProjectQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    limit: 1000
                  ) {
                    edges {
                      node {
                        fields {
                            slug
                        }
                        frontmatter {
                            featuredImage {
                                childImageSharp {
                                    fluid(fit: COVER) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            } 
                            title
                            date(formatString: "MMMM DD, YYYY")
                            description
                        }
                      }
                    }
                  }
              }
            `}
            render={data => (
                <ProjectContainer>
                    <TitleContainer>
                        <PageTitle>Projects</PageTitle>
                    </TitleContainer>
                    <ProjectCarousel>
                        {
                            data.allMarkdownRemark.edges.map((edge) => {
                                return <ProjectItem path={edge.node.fields.slug} image={edge.node.frontmatter.featuredImage}/>
                            })
                        }
                    </ProjectCarousel>
                </ProjectContainer>
            )}
        />
    );
}

export default Project;