import React from 'react';
import Layout from '../components/layout';
import ExternalLink from '../components/ExternalLink';

export default ({ location }) => (
    <Layout location={location}>
        <p>
            Have a question? Send us an email at{' '}
            <ExternalLink href="mailto:yves@parallel45.io">
                yves@parallel45.io
            </ExternalLink>
            .
        </p>
    </Layout>
);
