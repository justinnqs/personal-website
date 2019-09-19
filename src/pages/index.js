import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import { ThemeProvider } from 'styled-components';
import { defaultTheme, invertTheme } from '../components/atoms/Theme';
import { Defaults } from '../components/atoms/Defaults';
import Landing from '../components/sections/Landing';
import Project from '../components/sections/Project';
import Contact from '../components/sections/Contact';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
  faLinkedin,
  faGithub,
);

const IndexPage = () => (
  <ThemeProvider theme={defaultTheme}>
    <Layout>
        <Defaults />
        <SEO title="Home" />
        <Landing />
        <ThemeProvider theme={invertTheme}>
          <React.Fragment>
            <Project />
            <Contact />
          </React.Fragment>
        </ThemeProvider>
    </Layout>
  </ThemeProvider>

)

export default IndexPage
