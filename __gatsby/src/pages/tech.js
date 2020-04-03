import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Circle from '../components/Tech.Circle';
import { H2 } from '../components/Shared.Headings';
import styled from 'styled-components';

const TECHNOLOGIES = [
    {
        title: 'Frontend',
        imageNames: 'frontendImages',
        description: (
            <p>
                We like to design our frontend applications with React and use
                the best libraries within its ecosystem to provide the most
                awesome user experience for your users.
            </p>
        ),
        items: [
            {
                name: 'JavaScript'
            },
            {
                name: 'React',
                image: 'react.png'
            },
            {
                name: 'Redux',
                image: 'redux.png'
            },
            {
                name: 'GraphQL',
                image: 'graphql.png'
            },
            {
                name: 'Apollo'
            },
            {
                name: 'Styled Components'
            }
        ]
    },
    {
        title: 'Backend',
        imageNames: 'backendImages',
        description: <p>When it comes to APIs, we love to go micro!</p>,
        items: [
            {
                name: 'Node',
                image: 'node.png'
            },
            {
                name: 'Express',
                image: 'express.png'
            },
            {
                name: 'Apollo Server',
                image: 'apollo.png'
            },
            {
                name: 'Django',
                image: 'django.png'
            },
            {
                name: 'Postgres',
                image: 'postgresql.png'
            }
        ]
    },
    {
        title: 'Cloud computing',
        imageNames: 'cloudImages',
        description: (
            <p>Want to shoot for the moon? There's an AWS service for that!</p>
        ),
        items: [
            {
                name: 'API Gateway',
                image: 'apigateway.png'
            },
            {
                name: 'Lambda',
                image: 'lambda.png'
            },
            {
                name: 'DynamoDB',
                image: 'dynamodb.png'
            }
        ]
    }
];

export default ({ location }) => {
    const images = useStaticQuery(graphql`
        query {
            frontendImages: allFile(
                filter: { relativePath: { regex: "/tech/frontend/" } }
            ) {
                nodes {
                    childImageSharp {
                        fixed(height: 70) {
                            originalName
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
            frontendImagesSmall: allFile(
                filter: { relativePath: { regex: "/tech/frontend/" } }
            ) {
                nodes {
                    childImageSharp {
                        fixed(height: 44) {
                            originalName
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
            backendImages: allFile(
                filter: { relativePath: { regex: "/tech/backend/" } }
            ) {
                nodes {
                    childImageSharp {
                        fixed(height: 70) {
                            originalName
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
            backendImagesSmall: allFile(
                filter: { relativePath: { regex: "/tech/backend/" } }
            ) {
                nodes {
                    childImageSharp {
                        fixed(height: 44) {
                            originalName
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
            cloudImages: allFile(
                filter: { relativePath: { regex: "/tech/cloud/" } }
            ) {
                nodes {
                    childImageSharp {
                        fixed(height: 70) {
                            originalName
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
            cloudImagesSmall: allFile(
                filter: { relativePath: { regex: "/tech/cloud/" } }
            ) {
                nodes {
                    childImageSharp {
                        fixed(height: 44) {
                            originalName
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout location={location}>
            {TECHNOLOGIES.map(group => (
                <Fragment key={group.title}>
                    <H2>{group.title}</H2>
                    {group.description}
                    <Circle
                        data={group}
                        images={images[group.imageNames].nodes}
                        smallImages={images[`${group.imageNames}Small`].nodes}
                        itemCount={group.items.length}
                    />
                </Fragment>
            ))}
        </Layout>
    );
};
