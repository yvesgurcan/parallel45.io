## Development

This website was built with [Gatsby](./GATSBY.md).

    gatsby develop

The development server will run at `http://localhost:8000`.
You can also query your data at `http://localhost:8000/___graphql`.

## Build

    gatsby build

### Configuration

    .
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    └── gatsby-ssr.js

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

2.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

3.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
