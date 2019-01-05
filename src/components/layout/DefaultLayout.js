import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Footer from "./Footer";
import Metadata from "./Metadata";
import Header from "./Header";

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        copyright
        author {
          name
        }
      }
    }
  }
`;

const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { title, description, copyright, author } = data.site.siteMetadata;
      return (
        <>
          <Metadata
            title={title}
            description={description}
            copyright={copyright}
            author={author.name}
          />
          <Header title={title}/>
          {children}
          <Footer text={copyright} />
        </>
      );
    }}
  />
);

export default DefaultLayout;
