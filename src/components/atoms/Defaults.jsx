import { createGlobalStyle } from "styled-components";

export const Defaults = createGlobalStyle`
  html { 
    font-size: 10px;
    font-size: 62.5%; 
    font-family: 'Source Sans Pro', sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    margin: 0;
  }

  body {
    background-color: ${props => props.theme.background};
    margin: 0;
  }

  h1 { 
    font-size: 2.4em;
    margin: 0;
  }
  h2 { 
    font-size: 1.8em;
    margin: 0;
  }
  h3 { 
    font-size: 1.5em;
    margin: 0;
  }
  h4 { 
    font-size: 1.2em;
    margin: 0;
  } 

  input, select, th, td, p { font-size: 1em }
`;
