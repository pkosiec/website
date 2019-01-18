import React from "react";
import { graphql } from "gatsby";

import "../config/icons";

import { DefaultLayout } from "../components/layout/DefaultLayout";
import { About } from "../components/index/about/About";
import { Contact, SocialMedia } from "../components/index/contact/Contact";
import { Project } from "../components/index/projects/Project";
import Projects from "../components/index/projects/Projects";

interface IndexProps {
  data: {
    site: {
      siteMetadata: {
        author: {
          email: string;
        };
        socialMedia: SocialMedia[];
        projects: Project[];
        projectsEnabled: boolean;
      };
    };
  };
}

const IndexPage: React.FunctionComponent<IndexProps> = ({ data }) => {
  const {
    author,
    socialMedia,
    projects,
    projectsEnabled,
  } = data.site.siteMetadata;

  return (
    <DefaultLayout>
      <About />
      <Contact email={author.email} socialMedia={socialMedia} />
      {projectsEnabled && <Projects projects={projects} />}
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
        projectsEnabled
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
