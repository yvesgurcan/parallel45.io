import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { InlineWidget } from 'react-calendly';
import Layout from '../components/layout';
import ExternalLink from '../components/Shared.ExternalLink';
import Portrait from '../components/About.Portrait';

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
                    in Portland, Oregon where he settled in 2014.
                </p>
                <p>
                    Have a question? Want to get in touch? Send me an email at{' '}
                    <ExternalLink
                        href={`mailto:${data.site.siteMetadata.author.email}`}
                    >
                        yves@parallel45.io
                    </ExternalLink>{' '}
                    or schedule a time for a video/phone call with me.
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
