import React from "react";

import DefaultLayout from "../components/layout/DefaultLayout";
import { graphql } from "gatsby";
import SocialTiles from "../components/home/SocialTiles";

import "../config/icons";
import About from "../components/home/About";

const IndexPage = ({ data }) => (
  <DefaultLayout>
    <div>
      <About/>
      <SocialTiles tiles={data.site.siteMetadata.socialMedia} />
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
