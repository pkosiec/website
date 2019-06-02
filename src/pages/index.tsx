import * as React from "react";
import { graphql } from "gatsby";

import "@config/icons";

import { DefaultLayout } from "@components/layout/DefaultLayout";
import { About } from "@components/index/about/About";
import { Contact, SocialLink } from "@components/index/contact/Contact";
import { Project } from "@components/index/projects/Project";
import Projects from "@components/index/projects/Projects";

interface IndexProps {
  data: {
    site: {
      siteMetadata: {
        author: {
          email: string;
        };
        socialLinks: SocialLink[];
        projects: Project[];
        projectsEnabled: boolean;
      };
    };
  };
}

const IndexPage: React.FunctionComponent<IndexProps> = ({ data }) => {
  const { socialLinks, projects } = data.site.siteMetadata;

  return (
    <DefaultLayout>
      <About />
      <Contact socialLinks={socialLinks} />
      <Projects projects={projects} />
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
        socialLinks {
          name
          url
          iconName
          iconPrefix
          featured
        }
        projects {
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
