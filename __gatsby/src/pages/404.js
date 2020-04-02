import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Logo from '../components/Layout.Header.Logo';

export default ({ location }) => (
    <Layout
        location={location}
        seoTitle="Not Found"
        title={
            <Title>
                <Error>Error</Error>
                <Logo egg={false} />
            </Title>
        }
    >
        <p>
            We couldn't find the page you're looking for.{' '}
            <span role="img" aria-label="Smiling face with cold sweat.">
                😅
            </span>{' '}
        </p>
    </Layout>
);

const Title = styled.div`
    display: flex;
    font-size: 114%;
`;

const Error = styled.div`
    line-height: 3.1rem;
    margin-right: 0.5rem;
`;
