module.exports = {
    siteMetadata: {
        title: `Parallel45`,
        description: `Build elegant user interfaces suited to your business needs. `,
        author: `@yvesgurcan`,
        menuLinks: [
            {
                name: 'about',
                link: '/about'
            },
            {
                name: 'career',
                link: '/career'
            },
            {
                name: 'contact',
                link: '/contact'
            }
        ]
        description: `Build elegant user interfaces suited to your business needs.`,
        author: '@yvesgurcan',
        repository: 'https://github.com/yvesgurcan/parallel45.io'
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
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Questrial`
                    }
                ]
            }
        }
    ]
};
