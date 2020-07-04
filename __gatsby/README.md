## Development

This website is built with [Gatsby](https://www.gatsbyjs.org/).

    npm start

-   The development server will run at `http://localhost:8080`.
-   The server can be accessed on your network at the IP of your device under the same port.
-   Query explorer can be found at `http://localhost:8080/___graphql`.

## Build

    npm run build

Alternatively, you can use NPM built-in command `npm version patch|minor|major` to bump the version and create a build afterwards automatically.

## Gatsby Configuration

**`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

## Gatsby Node API

**`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

Blog posts are generated via Node during the build steps.

## Gatsby Browser API

**`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

## Blog

This site has a built-in blog served at `/blog`. The posts are markdown files that can be found in [/content/blog](./content/blog).

### Frontmatter

-   `date`: The date of publication of the post (format `YYYY-MM-DD`).

    ```yml
    ---
    date: 2020-03-30
    ---

    ```

    Note that scheduling the publication of posts is not handled right now.

-   `title`: The title of the post. If no title is provided, the name of the file will be formatted and used as the title of the post.

    ```yml
    ---
    title: "Problem solving: Mike Acton's tips for game industry programmers"
    ---

    ```

*   `image`: Images are stored in [/content/assets/blog-images](./content/assets/blog-images) and are displayed as part of the headline of the post. Type the filename and extension of the image in the front matter.

    ```yml
    ---
    image: user-experience.png
    ---

    ```

    The image will be fetched form [/content/assets/blog-images/user-experience.png](./content/assets/blog-images/user-experience.png)) at build time.

*   `youtube`: You can embed a YouTube video instead of an image in your headline by entering a video identifier.

    ```yml
    ---
    youtube: cV5HArLYajE
    ---

    ```

    Note that it is still important to specify an `image` in your frontmatter as it will be used as a thumbnail by social media platforms when sharing the URL of the post.

## The little things

-   The theme of the website (light vs dark) changes depending on the time of the day.
-   Clicking on icons and logos usually reveals a little somtething.

## Social media icons

Social media icons used on this website can be found at https://simpleicons.org/.
