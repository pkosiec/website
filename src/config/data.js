const package = require("../../package.json");

const data = {
  title: "Paweł Kosiec, Full-stack Developer",
  author: package.author,
  copyright: `©2012-${new Date().getFullYear()} Paweł Kosiec`,
  keywords: "fullstack,frontend,backend,developer,golang,javascript,react",
  description:
    "I am software developer interested in technology and gadgets. Cloud-native and open-source enthusiast.",
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pkosiec",
      icon: "linkedin-in",
    },
    { name: "GitHub", url: "https://github.com/pkosiec", icon: "github" },
    { name: "Twitter", url: "https://twitter.com/pkosiec", icon: "twitter" },
    { name: "Medium", url: "https://medium.com/@pkosiec", icon: "medium-m" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pkosiec",
      icon: "instagram",
    },
  ],
  projectsEnabled: false,
  projects: [
    {
      title: "Mongo Seeding",
      description: "Open source solution for populating MongoDB database",
      link: "https://github.com/pkosiec/mongo-seeding",
      image: "/projects/mongo-seeding.png",
    },
    {
      title: "Gophers Silesia",
      description: "Local Go & Cloud Native Meetup",
      link: "https://www.meetup.com/GophersSilesia/",
      image: "/projects/gophers-silesia.png",
    },
  ],
};

module.exports = data;
