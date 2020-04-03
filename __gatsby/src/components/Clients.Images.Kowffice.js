import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            kowffice: file(relativePath: { eq: "clients/kowffice.png" }) {
                childImageSharp {
                    fixed(width: 320, height: 155) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    return (
        <Img
            fixed={data.kowffice.childImageSharp.fixed}
            alt="Kowffice"
            title="Kowffice"
        />
    );
};
