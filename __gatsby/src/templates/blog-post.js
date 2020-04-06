import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import ExternalLink from '../components/Shared.ExternalLink';

const getTitle = function(frontmatterTitle, slug) {
    return (
        frontmatterTitle ||
        slug[1].toUpperCase() +
            slug
                .replace(/-/g, ' ')
                .replace(/\//g, '')
                .substring(1, slug.length - 1)
    );
};

export default ({ data, pageContext, location }) => {
    const post = data.markdownRemark;
    const { fields, frontmatter, excerpt, html } = post;
    const { slug } = fields;
    const { title: defaultTitle, date, image } = frontmatter;
    const title = getTitle(defaultTitle, slug);
    const { author } = data.site.siteMetadata;
    const { previous, next } = pageContext;
    const images = data.allFile.nodes;
    const postImage =
        image &&
        images.find(img => img.childImageSharp.fluid.originalName === image);
    console.log(postImage.childImageSharp.original.src);
    return (
        <Layout
            location={{ ...location, parent: '/blog' }}
            title={title}
            description={excerpt}
            imgSrc={postImage.childImageSharp.original.src}
        >
            <article>
                <header>
                    {postImage && (
                        <PostImage>
                            <ExternalLink
                                href={postImage.childImageSharp.original.src}
                            >
                                <Img
                                    fluid={postImage.childImageSharp.fluid}
                                    alt={title}
                                    title={title}
                                />
                            </ExternalLink>
                        </PostImage>
                    )}
                    <p>
                        {date && <span>{date}.</span>}
                        <span>
                            {' '}
                            Written by{' '}
                            <ExternalLink href={author.twitter}>
                                {author.name}
                            </ExternalLink>
                            .
                        </span>
                    </p>
                </header>
                <section dangerouslySetInnerHTML={{ __html: html }} />
            </article>
            <nav>
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0
                    }}
                >
                    <li>
                        {previous && (
                            <Link
                                to={`/blog${previous.fields.slug}`}
                                rel="prev"
                            >
                                ←{' '}
                                {getTitle(
                                    previous.frontmatter.title,
                                    previous.fields.slug
                                )}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={`/blog${next.fields.slug}`} rel="next">
                                {getTitle(
                                    next.frontmatter.title,
                                    next.fields.slug
                                )}{' '}
                                →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    );
};

const PostImage = styled.div`
    padding-bottom: 1rem;
`;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                author {
                    name
                    twitter
                }
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            fields {
                slug
            }
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                image
            }
        }
        allFile(filter: { relativePath: { regex: "/blog-images/" } }) {
            nodes {
                childImageSharp {
                    original {
                        src
                    }
                    fluid(maxWidth: 750, maxHeight: 400) {
                        originalName
                        originalImg
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;
