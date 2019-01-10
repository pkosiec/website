import React from "react";
import Section from "./Section";
import { Project } from "./projects/Project";

const Projects = () => {
  const projects = [
    {
      title: "Mongo Seeding",
      description: "Open source solution for populating MongoDB database",
      link: "https://github.com/pkosiec/mongo-seeding",
      bgImage: "",
    },
    {
      title: "Gophers Silesia",
      description: "Local Go & Cloud Native Meetup",
      link: "https://www.meetup.com/GophersSilesia/",
      bgImage: "",
    },
  ];

  return (
    <Section>
      <h1>Featured projects</h1>
      <ul>
        <li>
          {projects.map(project => (
            <Project bgImage={project.bgImage} key={project.title}>
              <a href={project.link}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </Project>
          ))}
        </li>
      </ul>
    </Section>
  );
};

export default Projects;
