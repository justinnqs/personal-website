import styled from 'styled-components';

export const DefaultButtonStyle = styled.button `
    color: ${props => props.theme.background};
    border-color: ${props => props.theme.highlight};
    background-color: ${props => props.theme.subtle};
    border-width: 1.5px;
    padding: 0.5rem 1rem;
    border-radius: 30px 30px;
    font-size: 1.5rem;
    font-family: inherit;
    outline: inherit;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.subtleHighlight};
    }
`;