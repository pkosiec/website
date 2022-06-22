import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { AboutMe } from "../components/homepage/AboutMe";

import { SocialLinks } from "../components/homepage/SocialLinks";
import { Hero } from "../components/homepage/Hero";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Hero />
      <main>
        <div className="container padding-vert">
          <AboutMe />
          <SocialLinks />
        </div>
      </main>
    </Layout>
  );
}
