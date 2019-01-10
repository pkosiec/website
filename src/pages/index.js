import React from "react";

import DefaultLayout from "../components/layout/DefaultLayout";
import { graphql } from "gatsby";

import "../config/icons";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Contact from "../components/home/contact/Contact";

const IndexPage = ({ data }) => (
  <DefaultLayout>
    <div>
      <About/>
      <Projects/>
      <Contact tiles={data.site.siteMetadata.socialMedia} />
    </div>
  </DefaultLayout>
);

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        socialMedia {
          name
          url
          icon
        }
      }
    }
  }
`;

export default IndexPage;
