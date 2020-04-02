import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from './seo';
import Header from './Layout.Header';
import Footer from './Layout.Footer';
import { H1 } from './Shared.Headings';
import './layout.css';

export default ({ title, seoTitle, description, location, children }) => {
    const {
        site: { siteMetadata }
    } = useStaticQuery(graphql`
        query LayoutQuery {
            site {
                siteMetadata {
                    menuLinks {
                        pathname
                        item
                        title
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
                    location.pathname === `${menuLink.pathname}/` ||
                    location.parent === menuLink.pathname
            )) ||
        {};

    const layoutTitle = title || currentPageData.title;

    return (
        <Root>
            <Header currentPageData={currentPageData} location={location} />
            <MainContainer>
                <Main>
                    {layoutTitle && (
                        <Fragment>
                            <SEO
                                title={seoTitle || layoutTitle}
                                description={description}
                            />
                            {<H1>{layoutTitle}</H1>}
                        </Fragment>
                    )}
                    {children}
                </Main>
            </MainContainer>
            <Footer />
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    overflow: hidden;
`;

const MainContainer = styled.div`
    margin: auto;
    max-width: 100%;
`;

const Main = styled.main`
    max-width: 750px;
    padding: 1em;
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-sizing: content-box;
`;
