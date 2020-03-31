import React from 'react';
import Layout from '../components/layout';
import ExternalLink from '../components/ExternalLink';

export default ({ location }) => (
    <Layout location={location}>
        <p>
            <ExternalLink href="https://www.yvesgurcan.com/">
                Yves Gurcan
            </ExternalLink>{' '}
            is the founder of{' '}
            <ExternalLink href="https:/en.wikipedia.org/wiki/45th_parallel_north">
                Parallel45
            </ExternalLink>
            . Born in France, he currently lives in Portland, Oregon where he
            settled in 2014.
        </p>
        <p>
            Have a question? Send us an email at{' '}
            <ExternalLink href="mailto:yves@parallel45.io">
                yves@parallel45.io
            </ExternalLink>
            .
        </p>
    </Layout>
);
