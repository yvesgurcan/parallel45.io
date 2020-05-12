import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { InlineWidget } from 'react-calendly';
import Layout from '../components/layout';
import ExternalLink from '../components/Shared.ExternalLink';
import Portrait from '../components/About.Portrait';

const getYearsOfExperience = () => {
    const start = new Date('01/01/2015');
    const now = new Date();
    let diff = (now.getTime() - start.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
};

export default ({ data, location }) => {
    const {
        site: { siteMetadata }
    } = useStaticQuery(graphql`
        query AboutQuery {
            site {
                siteMetadata {
                    author {
                        website
                        networking
                        email
                    }
                }
            }
        }
    `);

    return (
        <Layout location={location}>
            <div>
                <PortraitContainer href={siteMetadata.author.networking}>
                    <Portrait />
                </PortraitContainer>
                <p>
                    <ExternalLink href="https:/en.wikipedia.org/wiki/45th_parallel_north">
                        Parallel45
                    </ExternalLink>{' '}
                    was founded by{' '}
                    <ExternalLink href={siteMetadata.author.website}>
                        Yves Gurcan
                    </ExternalLink>
                    .
                </p>
                <p>
                    Born in France, Yves (pronounced <i>Eve</i>) currently lives
                    in Portland, Oregon where he settled in 2014. He is a senior
                    software engineer with more than {getYearsOfExperience()}{' '}
                    years of experience.
                </p>
                <p>
                    Throughout his career, Yves has worked both for small tech
                    startups and huge companies like Nike. He's very much a
                    product-minded engineer and a strong communicator.
                </p>
                <p>
                    Want to get in touch? Send an email to{' '}
                    <ExternalLink
                        href={`mailto:${data.site.siteMetadata.author.email}`}
                    >
                        yves@parallel45.io
                    </ExternalLink>{' '}
                    or schedule a time below for a video/phone call with Yves.
                </p>
                <InlineWidget
                    styles={{
                        height: 1350
                    }}
                    url="https://calendly.com/yvesgurcan/chat"
                />
            </div>
        </Layout>
    );
};

const PortraitContainer = styled(ExternalLink)`
    float: left;
    margin-top: 1rem;
    margin-right: 2rem;
    margin-bottom: 1rem;

    @media only screen and (max-width: 600px) {
        float: none;
        display: flex;
        justify-content: center;
    }
`;
