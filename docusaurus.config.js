// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Paweł Kosiec, Full-stack Cloud Developer',
  tagline: 'Software engineer interested in personal growth and tech trends. Cloud-native and open-source enthusiast.',
  url: 'https://kosiec.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config
  organizationName: 'pkosiec',
  projectName: 'website',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/pkosiec/website/tree/main/',
            feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} Paweł Kosiec`,
            },
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
          metadata: [
            {name: 'description', content: 'I am software developer interested in technology and gadgets. Cloud-native and open-source enthusiast.'},
            {name: 'keywords', content:     "fullstack,frontend,backend,developer,engineer,go,golang,javascript,react,reactjs,kubernetes,devops,cloud,cloud-native,open-source"}
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: false,
        title: 'Paweł Kosiec',
        logo: {
          alt: 'Paweł Kosiec Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/projects', label: 'Projects', position: 'left'},
          {to: '/talks', label: 'Talks', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        
        links: [
          {            
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/pkosiec',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/pkosiec',
              },
              {
                label: 'Email me',
                href: "mailto:pawel@kosiec.net"
              },
            ],
          },
          {
            title: 'Discover',
            items: [
              {
                label: 'About me',
                to: "/"
              },
              {
                label: 'Projects',
                to: "/projects"
              },
              {
                label: 'Talks',
                to: "/talks"
              },
            ],
          },
          {
            title: 'Subscribe to Blog',
            items: [
              {
                label: 'RSS',
                to: '/blog/rss.xml',
              },
              {
                label: 'Atom',
                to: '/blog/atom.xml',
              },
              {
                label: 'JSON',
                to: '/blog/feed.json',
              },
            ],
          },
        ],
        copyright: `Copyright © 2012-${new Date().getFullYear()} Paweł Kosiec.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
