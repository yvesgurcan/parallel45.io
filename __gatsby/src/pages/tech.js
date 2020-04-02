import React from 'react';
import Layout from '../components/layout';
import Circle from '../components/Tech.Circle';

const TECHNOLOGIES = {
    frontend: [],
    backend: []
};

export default ({ location }) => (
    <Layout location={location}>
        <Circle />
    </Layout>
);
