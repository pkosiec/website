import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AboutMe from './_about-me.md';

import { SocialLinks } from '../components/homepage/SocialLinks';
import { Hero } from '../components/homepage/Hero';


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="I am software developer interested in technology and gadgets. Cloud-native and open-source enthusiast.">
      <Hero />
      <main>
        <div className='container padding-vert'>
          <AboutMe />
          <SocialLinks />
        </div>
      </main>
    </Layout>
  );
}



