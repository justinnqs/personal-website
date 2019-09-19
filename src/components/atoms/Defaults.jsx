import { createGlobalStyle } from "styled-components";

export const Defaults = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    margin: 0;
  }
  h1 { 
    margin: 0;
  }
  h2 { 
    margin: 0;
  }
  h3 { 
    margin: 0;
  }
  h4 { 
    margin: 0;
  } 
`;
