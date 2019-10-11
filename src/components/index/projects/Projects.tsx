import * as React from "react";
import styled from "@config/styled";
import { media } from "@config/responsive";
import { Section } from "@components/layout/shared/Section";
import { Project } from "@components/index/projects/Project";

interface ProjectsProps {
  projects: Project[];
}

const List = styled.ul`
  margin: 40px -20px 0 -20px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

const Item = styled.li`
  margin: 0 20px 40px 20px;
  flex-basis: calc(50% - 40px);
  list-style-type: none;
  display: block;

  *:last-child {
    margin-bottom: auto;
  }

  ${media.phone`
    flex-basis: 100%;
    margin: 0 0 20px;
  `}
`;

const Projects: React.FunctionComponent<ProjectsProps> = ({
  projects = [],
}) => {
  return (
    <Section>
      <h1>Projects & Initiatives</h1>
      <List>
        {projects.map(project => (
          <Item key={project.title}>
            <Project project={project} />
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default Projects;
