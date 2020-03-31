import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import ExternalLink from '../components/Shared.ExternalLink';
import SEO from '../components/seo';

export default ({ data, pageContext }) => {
    const post = data.markdownRemark;
    const { blogContributor } = data.site.siteMetadata;
    const { previous, next } = pageContext;

    return (
        <Layout
            title={
                post.frontmatter.title ||
                post.fields.slug.replace(/-/g, ' ').replace(/\//g, '')
            }
        >
            <SEO description={post.excerpt} />
            <article>
                <header>
                    <p>
                        {post.frontmatter.date && (
                            <span>{post.frontmatter.date}.</span>
                        )}
                        <span>
                            Written by{' '}
                            <ExternalLink href={blogContributor.url}>
                                {blogContributor.name}
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
                blogContributor {
                    name
                    url
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
