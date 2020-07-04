import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "clients/volum.png" }) {
                childImageSharp {
                    fixed(width: 340) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    return (
        <Img
            fixed={data.image.childImageSharp.fixed}
            alt="Volum"
            title="Volum"
        />
    );
};
