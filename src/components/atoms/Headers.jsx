import styled from 'styled-components';

export const Title = styled.h1 `
    font-size: 10rem;
    font-weight: 900;
    color: ${props => props.theme.subtle};
`

export const SubTitle = styled.h2 `
    font-size: 2.5rem;
    font-weight: 300;
    color: ${props => props.theme.highlight};
`

export const PageTitle = styled.h1 `
    font-size: 5rem;
    color: ${props => props.theme.subtle};
    border-bottom: 5px solid ${props => props.theme.highlight};
`