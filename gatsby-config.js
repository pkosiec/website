const package = require("./package.json");
const { BACKGROUND_COLOR, ACCENT_COLOR } = require("./src/constans/colors");

module.exports = {
  siteMetadata: {
    title: `Paweł Kosiec, Full-stack Developer`,
    author: package.author,
    copyright: `© 2012-${new Date().getFullYear()} Paweł Kosiec`,
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
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paweł Kosiec`,
        short_name: `pkosiec`,
        start_url: `/`,
        background_color: BACKGROUND_COLOR,
        theme_color: ACCENT_COLOR,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/config/typography`,
      },
    },
  ],
};
