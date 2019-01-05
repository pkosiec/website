import React from "react";
import Helmet from "react-helmet";

const Metadata = ({ title, description, author, copyright }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
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
          content: author,
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
          content:
            "fullstack,frontend,backend,developer,golang,javascript,react",
        },
      ]}
    />
  );
};

export default Metadata;
