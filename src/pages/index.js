import React from "react";

import DefaultLayout from "../components/layout/DefaultLayout";
import { graphql } from "gatsby";
import SocialTiles from "../components/home/SocialTiles";
import ContactAction from "../components/home/ContactAction";

import "../config/icons";

const IndexPage = ({ data }) => (
  <DefaultLayout>
    <div>
      <SocialTiles tiles={data.site.siteMetadata.socialMedia} />
      <ContactAction/>
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
