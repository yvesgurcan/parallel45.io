/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        name
                        link
                    }
                }
            }
        }
    `);

    return (
        <Fragment>
            <Header
                menuLinks={data.site.siteMetadata.menuLinks}
            />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`
                }}
            >
                <main
                    style={{
                        minHeight: 'calc(100vh - 200px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    {children}
                </main>
            </div>
            <Footer>
                <a href={data.site.siteMetadata.repository} rel="noopener noreferrer">
                    Repository
                </a>
            </Footer>
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

const Footer = styled.footer`
    background: teal;
    width: 100vw;
    padding: 1rem;
`;

export default Layout;
