import React, { useRef } from 'react';
import styled from 'styled-components';
import { TextInput } from '../atoms/TextInput';

const TerminalContainer = styled.div `
    background-color: black;
    width: 100%;
    position: fixed;
    bottom: 0;
`

const TerminalLabel = styled.h4 `
    padding-top: 0.5em;
    padding-left: 0.5em;
    color: white;
`

const TerminalStart = styled.h4 `
    height: 50%;
    font-size: 1.4em;
    color: ${props => props.theme.highlight};
    padding-left: 0.5em;
`

const TerminalInput = styled(TextInput) `
    width: 100%;
    /* padding-left:; */
`

const InputContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`




export const Terminal = () => {
    const inputRef = useRef(null);

    return(
        <TerminalContainer>
            <TerminalLabel># justinsian @ Justins-MacBook-Pro in ~/Documents/personal-website</TerminalLabel>
            <InputContainer>
                <TerminalStart>$ </TerminalStart>
                <TerminalInput
                    ref={inputRef} onBlur={() => inputRef && inputRef.current.focus()} 
                    autoFocus 
                />
            </InputContainer>
        </TerminalContainer>
    );
}