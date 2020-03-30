import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>Not found</h1>
        <p>Sorry, nothing here.</p>
    </Layout>
);

export default NotFoundPage;
