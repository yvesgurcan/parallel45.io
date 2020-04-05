const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPost = path.resolve(`./src/templates/blog-post.js`);
    const result = await graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                date
                            }
                        }
                    }
                }
            }
        `
    );

    if (result.errors) {
        throw result.errors;
    }

    // TODO: Extrapolate title from the name of the markdown file (e.g.: "My blog post about CloudFormation.md")
    // TODO: Extrapolate publish date from the name of the markdown file (e.g.: "2020-04-04 Another blog post on an interesting subject.md)
    // TODO: Add possibility to hide a post if the frontmatter contains a hidden: true property (make sure that the logic for next and previous is updated accordingly)
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
        const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;
        const slug = post.node.fields.slug;

        createPage({
            path: `/blog${slug}`,
            component: blogPost,
            context: {
                slug,
                previous,
                next
            }
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const relativeFilePath = createFilePath({ node, getNode });
        createNodeField({
            node,
            name: `slug`,
            value: relativeFilePath
        });
    }
};
