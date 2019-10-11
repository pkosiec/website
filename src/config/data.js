const package = require("../../package.json");

const data = {
  title: "Paweł Kosiec, Full-stack Developer",
  author: package.author,
  siteUrl: "https://kosiec.net",
  copyright: `©2012-${new Date().getFullYear()} Paweł Kosiec`,
  keywords:
    "fullstack,frontend,backend,developer,golang,javascript,react,kubernetes,cloud,cloud-native,open-source",
  description:
    "I am software developer interested in technology and gadgets. Cloud-native and open-source enthusiast.",
  socialLinks: [
    {
      name: "Get in touch",
      url: "mailto:pawel@kosiec.net",
      iconName: "envelope",
      iconPrefix: "far",
      featured: true,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pkosiec",
      iconName: "linkedin-in",
    },
    { name: "GitHub", url: "https://github.com/pkosiec", iconName: "github" },
    {
      name: "Twitter",
      url: "https://twitter.com/pkosiec",
      iconName: "twitter",
    },
    {
      name: "Medium",
      url: "https://medium.com/@pkosiec",
      iconName: "medium-m",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pkosiec",
      iconName: "instagram",
    },
  ],
  projects: [
    {
      title: "Mongo Seeding",
      description: "Ultimate solution for populating MongoDB database",
      link: "https://github.com/pkosiec/mongo-seeding",
      image: "/projects/mongo-seeding.png",
    },
    {
      title: "Terminer",
      description: "Upgrade your terminal experience with a single command.",
      link: "https://github.com/pkosiec/terminer",
      image: "/projects/terminer.png",
    },
    {
      title: "Gophers Silesia",
      description: "Organization of Go & Cloud Native Meetup",
      link: "https://www.meetup.com/GophersSilesia",
      image: "/projects/gophers-silesia.png",
    },
  ],
};

module.exports = data;
