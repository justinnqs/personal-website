import styled from 'styled-components';

export const DefaultButtonStyle = styled.button `
    color: ${props => props.theme.font};
    border-color: ${props => props.theme.highlight};
    background-color: ${props => props.theme.subtle};
    border-width: 1px;
    padding: 0.5rem 3rem;
    border-radius: 30px 30px;
    font-size: 1.5rem;
    font-family: inherit;
    outline: inherit;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.highlight};
    }
`;