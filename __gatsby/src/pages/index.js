import React from 'react';
import Layout from '../components/Layout';
import InternalLink from '../components/Shared.InternalLink';
import ProcessItem from '../components/Index.ProcessItem';
import List from '../../content/assets/process/list.svg';
import Wrench from '../../content/assets/process/wrench.svg';
import Flag from '../../content/assets/process/flag.svg';

export default ({ location }) => (
    <Layout location={location}>
        <p>
            We work with you to make your web projects a reality. Thanks to{' '}
            <InternalLink to="/about">our expertise</InternalLink>, we provide
            solutions tailored to your needs. You can{' '}
            <InternalLink to="/clients">count on us</InternalLink> to involve
            you every step of the way, so that the result is exactly what you
            expect. No surprises!
        </p>
        <p>Examples of projects we can help you with:</p>
        <ul>
            <li>Migrate your infrastructure to the cloud.</li>
            <li>
                Build elegant user interfaces with bleeding edge technologies.
            </li>
            <li>Create a single page website.</li>
        </ul>
        <ProcessItem Image={List} animation="spin">
            We work with you to carve out the specifications of your project. We
            translate your idea into smaller development tasks and establish a
            roadmap to estimate the work that needs to be done.
        </ProcessItem>
        <ProcessItem Image={Wrench} reversed animation="rotate">
            Once the tasks are defined, we get to work! We keep you up to date
            about the status of the project as we progress. Keeping you in the
            loop is the best way to avoid surprises.
        </ProcessItem>
        <ProcessItem Image={Flag} animation="wave">
            When your application is ready, you have a couple of options: You
            can take over further development of the project yourself or leave
            hosting and maintenance to us. Your choice!
        </ProcessItem>
    </Layout>
);
