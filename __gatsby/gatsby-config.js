module.exports = {
    siteMetadata: {
        title: `Parallel45`,
        description: `Build elegant user interfaces suited to your business needs. `,
        repository: 'https://github.com/yvesgurcan/parallel45.io',
        blogContributor: {
            name: 'Yves Gurcan',
            url: `https://twitter.com/yvesgurcan`
        },
        social: [
            {
                name: 'twitter',
                url: 'https://twitter.com/parallel45io',
                handle: '@parallel45io'
            },

            {
                name: 'facebook',
                url: 'https://www.facebook.com/parallel45io'
            },

            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/company/parallel45io'
            }
        ],
        menuLinks: [
            {
                pathname: '/',
                title: 'Digital solutions'
            },
            {
                item: 'about',
                pathname: '/about',
                title: 'About'
            },
            {
                item: 'blog',
                pathname: '/blog',
                title: 'Latest posts'
            }
        ]
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `parallel45.io`,
                short_name: `parallel45`,
                start_url: `/`,
                background_color: `#008080`,
                theme_color: `#008080`,
                display: `minimal-ui`
                // icon: `content/assets/gatsby-icon.png`,
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
