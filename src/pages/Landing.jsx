import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../components/atoms/Theme';

import LandingTemplate from '../components/templates/LandingTemplate';

const Landing = (props) => {
    return(
        <ThemeProvider theme={defaultTheme}>
            <LandingTemplate>

            </LandingTemplate>
        </ThemeProvider>
    );
}

export default Landing;