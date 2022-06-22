import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const projects: ProjectData[] = [
  {
    title: "Capact",
    description: "A unified way to manage applications and infrastructure.",
    url: "https://capact.io",
    imageURL: "/img/projects/capact.png",
    role: "Maintainer",
  },
  {
    title: "Mongo Seeding",
    description: "Ultimate solution for populating MongoDB database.",
    url: "https://github.com/pkosiec/mongo-seeding",
    imageURL: "/img/projects/mongo-seeding.png",
    role: "Author",
  },
  {
    title: "Terminer",
    description: "Upgrade your terminal experience with a single command.",
    url: "https://github.com/pkosiec/terminer",
    imageURL: "/img/projects/terminer.png",
    role: "Author",
  },
  {
    title: "Gophers Silesia",
    description: "Go & Cloud Native Meetup organized in Katowice, Poland",
    url: "https://www.meetup.com/GophersSilesia",
    imageURL: "/img/projects/gophers-silesia.png",
    role: "Organizer",
  },
];

const title = "Projects";
const description = "Featured projects I was/am involved in";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
