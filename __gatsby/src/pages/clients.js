import React, { Fragment } from 'react';
import Layout from '../components/layout';
import Client from '../components/Clients.Client';
import KowfficeImage from '../components/Clients.Images.Kowffice';

const CLIENTS = [
    {
        name: 'Kowffice',
        website: 'https://kowffice.com',
        project: (
            <Fragment>
                <p>
                    Kowffice is a French startup that helps companies finding
                    office spaces. Once their agents uncover just the
                    right place, they provide a plan for the layout of your new office that fits your budget. Thanks to a website using bleeding edge technologies, Kowffice facilitates the life of both renters and owners!
                </p>
                <p>
                    Now that Kowffice has met financial success, Parallel45
                    helps the company to grow towards the next
                    technological steps.
                </p>
                <p>
                    Our software development experience is the key that enables
                    Kowffice to put in place best programming practices,
                    scalable methods, and solid documentation within this
                    amazing startup and ensure that new employees get up to speed in no time.
                </p>
            </Fragment>
        ),
        Image: KowfficeImage
    }
    {
        hidden: true,
        name: 'Simple Screens',
        project: (
            <Fragment>
                <p>Simple Screens is a venture by Dr Jay Richards to facilitate the screening of patients for common issues.</p>
            </Fragment>
        )
    }
];

export default ({ location }) => {
    return (
        <Layout location={location}>
            {CLIENTS.map(client => !client.hidden && (
                <Client key={client.name} client={client}>
                    {client.project}
                </Client>
            ))}
        </Layout>
    );
};
