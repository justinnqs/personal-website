import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Landing from '../components/Landing';
import { Defaults } from '../components/atoms/Defaults';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../components/atoms/Theme';
import NavTemplate from '../components/templates/NavTemplate';
import Project from '../components/Project';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
  faLinkedin,
  faGithub,
);

const IndexPage = () => (
  <ThemeProvider theme={defaultTheme}>
    <Layout>
      {/* <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
      <SEO title="Home" />
        <React.Fragment>
          <Defaults />
          <NavTemplate>
            <Landing></Landing>
            <Project></Project>
          </NavTemplate>
        </React.Fragment>
    </Layout>
  </ThemeProvider>

)

export default IndexPage
