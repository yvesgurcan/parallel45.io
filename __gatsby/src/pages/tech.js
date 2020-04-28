import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Circle from '../components/Tech.Circle';
import { H2 } from '../components/Shared.Headings';

const BREAKPOINT = 600;

const TECHNOLOGIES = [
    {
        title: 'Frontend',
        imageNames: 'frontendImages',
        description: (
            <p>
                We like to design our frontend applications with React and use
                the best libraries within its ecosystem to provide the most
                awesome user experience.
            </p>
        ),
        items: [
            {
                name: 'TypeScript',
                image: 'typescript.png'
            },
            {
                name: 'React',
                image: 'react.png'
            },
            {
                name: 'Gatsby',
                image: 'gatsby.png'
            },
            {
                name: 'GraphQL',
                image: 'graphql.png'
            },
            {
                name: 'Redux',
                image: 'redux.png'
            },
            {
                name: 'Styled Components',
                image: 'styled-components.png'
            }
        ]
    },
    {
        title: 'Backend',
        imageNames: 'backendImages',
        description: (
            <p>
                When it comes to APIs, we love to go micro! Node provides a
                great amount of flexibility for your backend.
            </p>
        ),
        items: [
            {
                name: 'Node',
                image: 'node.png'
            },
            {
                name: 'Apollo Server',
                image: 'apollo.png'
            },
            {
                name: 'MongoDB',
                image: 'mongodb.png'
            },
            {
                name: 'Django',
                image: 'django.png'
            },
            {
                name: 'Laravel',
                image: 'laravel.png'
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
            <p>
                Want a cost-effective solution and not compromise on
                scalability? AWS was made for you!
            </p>
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
            },
            {
                name: 'EC2',
                image: 'ec2.png'
            },
            {
                name: 'S3',
                image: 's3.png'
            }
        ]
    },
    {
        title: 'Pipeline',
        imageNames: 'pipelineImages',
        description: (
            <p>
                We help you build a pipeline for your continuous integration /
                continuous deployment thanks to these tools.
            </p>
        ),
        items: [
            {
                name: 'Cloud Formation',
                image: 'cloudformation.png'
            },
            {
                name: 'Jenkins',
                image: 'jenkins.png'
            },
            {
                name: 'GitLab CI',
                image: 'gitlab.png'
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
                        fixed(height: 85, width: 85) {
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
                        fixed(height: 55, width: 55) {
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
                        fixed(height: 85, width: 85) {
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
                        fixed(height: 55, width: 55) {
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
                        fixed(height: 85, width: 85) {
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
                        fixed(height: 55, width: 55) {
                            originalName
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
            pipelineImages: allFile(
                filter: { relativePath: { regex: "/tech/pipeline/" } }
            ) {
                nodes {
                    childImageSharp {
                        fixed(height: 85, width: 85) {
                            originalName
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
            pipelineImagesSmall: allFile(
                filter: { relativePath: { regex: "/tech/pipeline/" } }
            ) {
                nodes {
                    childImageSharp {
                        fixed(height: 55, width: 55) {
                            originalName
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            additionalTitleStyles={{
                textAlign: 'center'
            }}
            additionalMainStyles={{
                maxWidth: 1100,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            {TECHNOLOGIES.map((group, index) => (
                <TechGroup key={group.title}>
                    <H2>{group.title}</H2>
                    {group.description}
                    <Circle
                        data={group}
                        images={
                            images[group.imageNames] &&
                            images[group.imageNames].nodes
                        }
                        smallImages={
                            images[`${group.imageNames}Small`] &&
                            images[`${group.imageNames}Small`].nodes
                        }
                        itemCount={group.items.length}
                        reversed={!!((index - 1) % 2 === 0)}
                    />
                </TechGroup>
            ))}
        </Layout>
    );
};

const TechGroup = styled.div`
    max-width: 550px;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-sizing: border-box;

    @media only screen and (max-width: ${BREAKPOINT}px) {
        width: 100%;
        padding: 0;
    }
`;
