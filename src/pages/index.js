import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../components/atoms/Theme';
import { Defaults } from '../components/atoms/Defaults';
import IndexTemplate from '../components/templates/IndexTemplate';
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
      <SEO title="Home" />
      <Defaults />
      <IndexTemplate>
        <Landing />
        {/* <ThemeProvider theme={invertTheme}> */}
        <Project />
        <Contact />
        {/* </ThemeProvider> */}
      </IndexTemplate>
    </Layout>
  </ThemeProvider>

)

export default IndexPage
