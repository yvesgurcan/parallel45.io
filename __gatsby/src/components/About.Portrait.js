import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            portrait: file(relativePath: { eq: "contributors/yves.jpg" }) {
                childImageSharp {
                    fixed(width: 120, height: 120) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    return (
        <Portrait
            fixed={data.portrait.childImageSharp.fixed}
            alt="Yves Gurcan, founder of Parallel45"
            title="Yves Gurcan"
        />
    );
};

const Portrait = styled(Img)`
    border-radius: 50%;
    box-shadow: 0 0 8px 1px rgb(100, 100, 100);
`;
