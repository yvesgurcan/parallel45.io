module.exports = {
    siteMetadata: {
        title: `Parallel45`,
        description: `Web studio and consulting agency`,
        author: `@yvesgurcan`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `parallel45.io`,
                short_name: `parallel45`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`
                // icon: `src/images/gatsby-icon.png`,
            }
        },
        `gatsby-plugin-offline`
    ]
};
