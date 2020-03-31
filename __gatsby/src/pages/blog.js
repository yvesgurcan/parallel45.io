import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import ExternalLink from '../components/ExternalLink';

export default ({ data, location }) => {
    const posts = data.allMarkdownRemark.edges;
    const { blogContributor } = data.site.siteMetadata;

    return (
        <Layout location={location}>
            {posts.map(({ node }) => {
                const title =
                    node.frontmatter.title ||
                    node.fields.slug.replace(/-/g, ' ').replace(/\//g, '');
                return (
                    <article key={node.fields.slug}>
                        <header>
                            <PostTitle>
                                <Link
                                    style={{ boxShadow: `none` }}
                                    to={`/blog${node.fields.slug}`}
                                >
                                    {title}
                                </Link>
                            </PostTitle>
                            <small>
                                {node.frontmatter.date && (
                                    <span>{node.frontmatter.date}.</span>
                                )}
                                <span>
                                    Written by{' '}
                                    <ExternalLink href={blogContributor.url}>
                                        {blogContributor.name}
                                    </ExternalLink>
                                    .
                                </span>
                            </small>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html:
                                        node.frontmatter.description ||
                                        node.excerpt
                                }}
                            />
                        </section>
                    </article>
                );
            })}
        </Layout>
    );
};

const PostTitle = styled.h2`
    margin: 0;
`;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                blogContributor {
                    name
                    url
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
                    }
                }
            }
        }
    }
`;
