import React from "react";
import Section from "../../layout/Section";
import { Project } from "./Project";

const Projects = ({projects = []}) => {

  return (
    <Section>
      <h1>Featured projects</h1>
      <ul>
          {projects.map(project => (
            <li key={project.title}>
            <Project project={project}/> 
            </li>
          ))}
      </ul>
    </Section>
  );
};

export default Projects;
