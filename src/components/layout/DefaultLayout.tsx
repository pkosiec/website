import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Footer } from "./default/Footer";
import { Metadata } from "./default/Metadata";
import { Header } from "./default/Header";
import { GlobalStyles } from "./default/GlobalStyles";
import { TopBorder } from "./default/TopBorder";

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        copyright
        keywords
        author {
          name
        }
      }
    }
  }
`;

interface DefaultLayoutProps {
  pageTitle?: string;
}

export const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
  pageTitle,
  children,
}) => (
  <StaticQuery
    query={query}
    render={data => {
      const {
        title,
        description,
        copyright,
        author,
        keywords,
      } = data.site.siteMetadata;

      const metadataTitle = pageTitle ? `${pageTitle} - ${title}` : title;
      const authorName = author.name;

      return (
        <>
          <GlobalStyles />
          <TopBorder />
          <Metadata
            title={metadataTitle}
            description={description}
            copyright={copyright}
            authorName={authorName}
            keywords={keywords}
          />
          <Header logoAltText={authorName} />
          <main>{children}</main>
          <Footer text={copyright} />
        </>
      );
    }}
  />
);
