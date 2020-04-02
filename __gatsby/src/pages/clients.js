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
                    Kowffice is a French startup that offers solutions to find
                    office spaces for businesses. Once they uncovered just the
                    right place, they also make it cosy for you!
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
];

export default ({ location }) => {
    return (
        <Layout location={location}>
            {CLIENTS.map(client => (
                <Client key={client.name} client={client}>
                    {client.project}
                </Client>
            ))}
        </Layout>
    );
};
