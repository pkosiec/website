import * as React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

interface MetadataProps {
  title: string;
  description: string;
  authorName: string;
  keywords: string;
  copyright: string;
}

export const Metadata: React.FunctionComponent<MetadataProps> = ({
  title,
  description,
  authorName,
  keywords,
  copyright,
}) => {
  const host = process.env.GATSBY_SITE_URL || "";
  const logoPath = `${host}${withPrefix("/logo-metadata.png")}`;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: authorName,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: logoPath,
        },
        {
          name: "og:image",
          content: logoPath,
        },
        {
          name: "copyright",
          content: copyright,
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          name: "keywords",
          content: keywords,
        },
      ]}
    />
  );
};
