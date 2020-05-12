## Development

This website was built with [Gatsby](./GATSBY.md).

    gatsby develop

The development server will run at `http://localhost:8000`.
You can also query your data at `http://localhost:8000/___graphql`.

## Build

    gatsby clean
    gatsby build

### Configuration

**`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

## Server-side rendering

**`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

Blog posts are generated via Node during the build steps.

### Browser

**`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

## The little things

-   The theme of the website (light vs dark) changes depending on the time of the day.
-   Clicking on icons and logos usually reveals a little somtething.
