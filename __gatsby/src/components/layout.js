import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from './seo';
import Header from './header';
import Footer from './Footer';
import './layout.css';

export default ({ title, location, children }) => {
    const {
        site: { siteMetadata }
    } = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    menuLinks {
                        pathname
                        item
                        title
                    }
                    repository
                    social {
                        name
                        url
                    }
                }
            }
        }
    `);

    const currentPageData =
        (location &&
            siteMetadata.menuLinks.find(
                menuLink =>
                    location.pathname === menuLink.pathname ||
                    location.pathname === `${menuLink.pathname}/`
            )) ||
        {};

    const layoutTitle = title || currentPageData.title;

    return (
        <Root>
            <Header menuLinks={siteMetadata.menuLinks} />
            <MainContainer>
                <main>
                    {layoutTitle && (
                        <Fragment>
                            <SEO title={layoutTitle} />
                            <h1>{layoutTitle}</h1>
                        </Fragment>
                    )}
                    {children}
                </main>
            </MainContainer>
            <Footer
                social={siteMetadata.social}
                repository={siteMetadata.repository}
            />
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`;

const MainContainer = styled.div`
    margin: 0 auto;
    max-width: 600px;
    padding: 1rem;
`;
