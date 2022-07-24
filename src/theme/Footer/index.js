import React from "react";
import Footer from "@theme-original/Footer";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Newsletter } from "../../components/newsletter/Newsletter";

export default function FooterWrapper(props) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Newsletter data={siteConfig.customFields.newsletter} />
      <Footer {...props} />
    </>
  );
}
