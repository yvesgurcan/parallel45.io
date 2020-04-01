import React from 'react';
import Layout from '../components/layout';

export default ({ location }) => (
    <Layout location={location}>
        <p>We work with you to make your digital projects a reality.</p>
        <p>
            Thanks to our experience and expertise, we provide a solution
            tailored to your project needs.
        </p>
        <p>
            You can count on us to involve you every step of the way, so that
            the result is exactly what you expect. No surprises!
        </p>
        <p>We can help with the following:</p>
        <ul>
            <li>Migrate your infrastructure to the cloud.</li>
            <li>
                Build elegant user interfaces with bleeding edge technologies.
            </li>
            <li>Create a single page website.</li>
        </ul>
    </Layout>
);
