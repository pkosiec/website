import React from "react";

import DefaultLayout from "../components/layout/DefaultLayout";
import { graphql } from "gatsby";

import "../config/icons";
import About from "../components/home/about/About";
import Contact from "../components/home/contact/Contact";

const IndexPage = ({ data }) => {
  const metadata = data.site.siteMetadata;

  return (
    <DefaultLayout>
      <div>
        <About />
        <Contact email={metadata.author.email} tiles={metadata.socialMedia} />
      </div>
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
