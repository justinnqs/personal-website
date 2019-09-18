import styled from 'styled-components';

export const DefaultLinkStyle = styled.a`
    font-weight: 300;
    font-size: 1.8rem;
    color: ${props => props.theme.font};
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.highlight};
    }
`