import React from "react";
import { graphql } from "gatsby";

import "../config/icons";
import { DefaultLayout } from "../components/layout/DefaultLayout";
import { About } from "../components/index/about/About";
import { Contact } from "../components/index/contact/Contact";

const IndexPage = ({ data }) => {
  const metadata = data.site.siteMetadata;

  return (
    <DefaultLayout>
      <About />
      <Contact email={metadata.author.email} tiles={metadata.socialMedia} />
    </DefaultLayout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        author {
          email
        }
        socialMedia {
          name
          url
          icon
        }
        featuredProjects {
          title
          description
          link
          image
        }
      }
    }
  }
`;

export default IndexPage;
