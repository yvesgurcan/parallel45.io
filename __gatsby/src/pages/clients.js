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
                    office spaces. Once Kowffice uncovers just the
                    right place, they provide a plan for the layout of your new office. Thanks to a website using bleeding edge technologies,The pe!
                </p>
                <p>
                    Now that Kowffice has met financial success, Parallel45
                    helps the company in its growth towards the next
                    technological steps.
                </p>
                <p>
                    Our software development experience is the key that enables
                    Kowffice to put in place best programming practices,
                    scalable methods, and solid documentation within this
                    amazing startup.
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
