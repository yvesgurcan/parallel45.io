module.exports = {
    siteMetadata: {
        title: `Parallel45`,
        description: `Build elegant user interfaces suited to your business needs. `,
        repository: 'https://github.com/yvesgurcan/parallel45.io',
        author: {
            name: 'Yves Gurcan',
            email: 'yves@parallel45.io',
            website: 'https://yvesgurcan.com',
            twitter: 'https://twitter.com/yvesgurcan',
            networking: 'https://linkedin.com/in/yvesgurcan'
        },
        menuLinks: [
            {
                item: 'services',
                pathname: '/',
                title: 'Parallel45: Web studio and consulting agency'
            },
            {
                item: 'technologies',
                pathname: '/tech',
                title: 'Our favorite technologies',
                hidden: false
            },
            {
                item: 'our clients',
                pathname: '/clients',
                title: 'They chose Parallel45'
            },
            {
                item: 'about',
                pathname: '/about',
                title: 'About Parallel45'
            },
            {
                item: 'blog',
                pathname: '/blog',
                title: 'Latest posts'
            }
        ],
        social: [
            {
                name: 'twitter',
                url: 'https://twitter.com/parallel45io',
                handle: '@parallel45io',
                image: 'twitter'
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/company/parallel45io',
                image: 'linkedin'
            },
            {
                name: 'facebook',
                url: 'https://www.facebook.com/parallel45io',
                image: 'facebook'
            },
            {
                name: 'gitlab',
                url: 'https://gitlab.com/parallel45',
                image: 'gitlab'
            }
        ]
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-svg',
        'gatsby-plugin-offline',
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
                        // needed?
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
                trackingId: 'UA-166268696-1'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `parallel45.io`,
                short_name: `Parallel45`,
                start_url: `/`,
                background_color: `#008080`,
                theme_color: `#008080`,
                display: `minimal-ui`,
                icon: `content/assets/logo.png`
            }
        },
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
