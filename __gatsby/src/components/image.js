import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export default () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "parallel45-logo.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const imageData = data.logo.childImageSharp.fluid;
    console.log({ imageData });

    return (
        <Img
            fluid={imageData}
            alt="Parallel45 Logo"
            title="Parallel45 Logo"
            style={{
                width: imageData.width * 2,
                height: imageData.height * 2
            }}
        />
    );
};
