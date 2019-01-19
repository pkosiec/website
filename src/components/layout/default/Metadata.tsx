import * as React from "react";
import Helmet from "react-helmet";

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
