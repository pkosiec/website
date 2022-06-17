import React from 'react';
import Layout from '@theme/Layout';

import { Project, ProjectData } from '../components/projects/Project';

const projects: ProjectData[] = [
    {
        title: "Capact",
        description: "A unified way to manage applications and infrastructure.",
        url: "https://capact.io",
        imageURL: "/img/projects/capact.png",
        role: "Maintainer"
    },
    {
        title: "Mongo Seeding",
        description: "Ultimate solution for populating MongoDB database.",
        url: "https://github.com/pkosiec/mongo-seeding",
        imageURL: "/img/projects/mongo-seeding.png",
        role: "Author"
    },
    {
        title: "Terminer",
        description: "Upgrade your terminal experience with a single command.",
        url: "https://github.com/pkosiec/terminer",
        imageURL: "/img/projects/terminer.png",
        role: "Author"
    },
    {
        title: "Gophers Silesia",
        description: "Go & Cloud Native Meetup organized in Katowice, Poland",
        url: "https://www.meetup.com/GophersSilesia",
        imageURL: "/img/projects/gophers-silesia.png",
        role: "Organizer"
    },
]

export default function Projects(): JSX.Element {
    return (
        <Layout
            title="Projects"
            description="Featured projects I was/am involved in">
            <main className="container container--fluid margin-vert--lg">
                <h1>Projects</h1>
                <p>The featured projects I am involved in.</p>

                <div className="row">
                    {projects.map(project => <Project {...project} />)}
                </div>
            </main>
        </Layout >
    );
}


