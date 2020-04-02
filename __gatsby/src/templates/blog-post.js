import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import ExternalLink from '../components/Shared.ExternalLink';

export default ({ data, pageContext, location }) => {
    const post = data.markdownRemark;
    const { author } = data.site.siteMetadata;
    const { previous, next } = pageContext;
    return (
        <Layout
            location={{ ...location, parent: '/blog' }}
            title={
                post.frontmatter.title ||
                post.fields.slug.replace(/-/g, ' ').replace(/\//g, '')
            }
            description={post.excerpt}
        >
            <article>
                <header>
                    <p>
                        {post.frontmatter.date && (
                            <span>{post.frontmatter.date}.</span>
                        )}
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
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
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
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={`/blog${next.fields.slug}`} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    );
};

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
            }
        }
    }
`;
