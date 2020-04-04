import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from './seo';
import Header from './Layout.Header';
import Footer from './Layout.Footer';
import { H1 } from './Shared.Headings';
import './layout.css';

export default ({
    title,
    seoTitle,
    description,
    location,
    children,
    additionalTitleStyles = {},
    additionalMainStyles = {}
}) => {
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
            <SEO title={seoTitle || layoutTitle} description={description} />
            <Header currentPageData={currentPageData} location={location} />
            <div>
                {layoutTitle && (
                    <TitleContainer style={{ ...additionalTitleStyles }}>
                        <H1>{layoutTitle}</H1>
                    </TitleContainer>
                )}
                <Main style={{ ...additionalMainStyles }}>{children}</Main>
            </div>
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

const TitleContainer = styled.div`
    margin: auto;
    max-width: 750px;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 2rem;
    box-sizing: content-box;
`;

const Main = styled.main`
    margin: auto;
    max-width: 750px;
    padding-bottom: 2rem;
    padding-left: 1em;
    padding-right: 1em;
    box-sizing: content-box;
`;
