import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Client from '../components/Clients.Client';
import KowfficeImage from '../components/Clients.Images.Kowffice';
import SimpleScreens from '../components/Clients.Images.SimpleScreens';
import ExternalLink from '../components/Shared.ExternalLink';

const CLIENTS = [
    {
        name: 'Kowffice',
        website: 'https://kowffice.com',
        project: (
            <Fragment>
                <p>
                    Kowffice is a French startup that helps companies finding
                    office spaces. Once their agents uncover just the right
                    place, they provide a plan for the layout of your new office
                    that fits your budget. Thanks to a website using bleeding
                    edge technologies, Kowffice facilitates the life of both
                    renters and owners!
                </p>
                <p>
                    Now that Kowffice has met financial success, Parallel45
                    helps the company to grow towards the next technological
                    steps.
                </p>
                <p>
                    Our software development experience is the key that enables
                    Kowffice to put in place best programming practices,
                    scalable methods, and solid documentation within this
                    amazing startup and ensure that new employees get up to
                    speed in no time.
                </p>
            </Fragment>
        ),
        Image: KowfficeImage
    },
    {
        name: 'Simple Medical Screens',
        project: (
            <Fragment>
                <p>
                    Simple Medical Screens is an application used by medical
                    providers in the US to screen patients for common issues.
                    Thanks to tablets provided in the waiting room, patients
                    fill a survey when they check in to help doctors treat them
                    efficiently.
                </p>
                <p>
                    This project was built with{' '}
                    <ExternalLink href="http://alt.js.org/">
                        Alt.js
                    </ExternalLink>
                    , a promising solution to facilitate state management.
                </p>
                <p>
                    Unfortunately, this Flux library didn't stand the test of
                    time. Our mission was simple yet necessary to enable further
                    development of this great application: Replace Alt with{' '}
                    <ExternalLink href="https://redux.js.org/">
                        Redux
                    </ExternalLink>
                    , a more durable choice for React applications.
                </p>
            </Fragment>
        ),
        Image: SimpleScreens
    }
];

export default ({ location }) => {
    return (
        <Layout location={location}>
            {CLIENTS.map(
                (client, index) =>
                    !client.hidden && (
                        <Client
                            key={client.name}
                            client={client}
                            index={index}
                            lastClient={index === CLIENTS.length - 1}
                        >
                            {client.project}
                        </Client>
                    )
            )}
        </Layout>
    );
};
