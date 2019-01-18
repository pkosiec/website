import * as React from "react";
import { Section } from "../../layout/shared/Section";
import { Project } from "./Project";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FunctionComponent<ProjectsProps> = ({
  projects = [],
}) => {
  return (
    <Section>
      <h1>Featured projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.title}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
