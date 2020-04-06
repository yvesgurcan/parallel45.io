import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang = 'en', meta, metaTags, title, imgSrc }) => {
    const { site, file } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        social {
                            url
                            handle
                        }
                    }
                }
                file(relativePath: { eq: "logo.png" }) {
                    childImageSharp {
                        original {
                            src
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            defaultTitle={site.siteMetadata.title}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: `${title} | ${site.siteMetadata.title}`
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    property: `twitter:card`,
                    content: `summary`
                },
                {
                    property: `twitter:creator`,
                    content: site.siteMetadata.social[0].handle
                    // hardcoded to twitter
                },
                {
                    property: `twitter:title`,
                    content: `${title} | ${site.siteMetadata.title}`
                },
                {
                    property: `twitter:description`,
                    content: metaDescription
                },
                {
                    property: `twitter:image`,
                    content: imgSrc || file.childImageSharp.original.src
                }
            ].concat(meta)}
        >
            {metaTags}
        </Helmet>
    );
};

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
};

export default SEO;
