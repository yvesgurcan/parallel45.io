import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import InternalLink from '../components/Shared.InternalLink';
import ExternalLink from '../components/Shared.ExternalLink';
import { H2 } from '../components/Shared.Headings';

export default ({ data, location }) => {
    const posts = data.allMarkdownRemark.edges;
    const { author } = data.site.siteMetadata;
    const images = data.allFile.nodes;

    return (
        <Layout location={location}>
            {posts.map(({ node }) => {
                const {
                    frontmatter: {
                        title: defaultTitle,
                        date,
                        description,
                        image
                    },
                    excerpt,
                    fields: { slug }
                } = node;

                const title =
                    defaultTitle ||
                    slug[1].toUpperCase() +
                        slug
                            .replace(/-/g, ' ')
                            .replace(/\//g, '')
                            .substring(1, slug.length - 1);

                const postImage = images.find(
                    img => img.childImageSharp.fluid.originalName === image
                );
                return (
                    <Post key={slug}>
                        <header>
                            <InternalLink to={`/blog${slug}`}>
                                <H2>{title}</H2>
                                {postImage && (
                                    <PostImage>
                                        <Img
                                            fluid={
                                                postImage.childImageSharp.fluid
                                            }
                                            alt={title}
                                            title={title}
                                        />
                                    </PostImage>
                                )}
                            </InternalLink>
                            <small>
                                {date && <span>{date}.</span>}
                                <span>
                                    {' '}
                                    Written by{' '}
                                    <ExternalLink href={author.twitter}>
                                        {author.name}
                                    </ExternalLink>
                                    .
                                </span>
                            </small>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: description || excerpt
                                }}
                            />
                        </section>
                    </Post>
                );
            })}
        </Layout>
    );
};

const Post = styled.article`
    padding-bottom: 1rem;
`;

const PostImage = styled.div`
    padding-bottom: 0.5rem;
`;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                author {
                    name
                    twitter
                }
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt(pruneLength: 350)
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        image
                    }
                }
            }
        }
        allFile(filter: { relativePath: { regex: "/blog-images/" } }) {
            nodes {
                childImageSharp {
                    fluid(maxWidth: 750, maxHeight: 300) {
                        originalName
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;
