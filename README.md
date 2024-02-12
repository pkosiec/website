<p align="center">
 <img src="https://raw.githubusercontent.com/pkosiec/website/main/static/img/logo.png" width="75">
</p>

# Paweł Kosiec - Personal Website

This repository contains source code of the Paweł Kosiec's personal website. To see it live, navigate to the [kosiec.dev](https://kosiec.dev) address.

## Development

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Toolchain

This project uses [Volta](https://github.com/volta-cli/volta) to manage the NodeJS version. Volta automatically downloads and installs the right Node.js version when you run any of the `node` or `npm` commands. Therefore, it is recommended to install it before developing this project to ensure the right Node.js version is used.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This site is deployed automatically from the `main` branch using [Cloudflare Pages](https://pages.cloudflare.com/).
