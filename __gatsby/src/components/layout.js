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
                }
            }
        }
    `);

    const currentPageData =
        (location &&
            siteMetadata.menuLinks.find(
                menuLink => menuLink.pathname === location.pathname
            )) ||
        {};

    const layoutTitle = title || currentPageData.title || currentPageData.item;

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
            <Footer repository={siteMetadata.repository} />
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
    max-width: 500px;
    padding: 0 1.0875rem 1.45rem;
`;
