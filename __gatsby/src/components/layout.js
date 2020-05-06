import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from './seo';
import Theme from './Layout.Theme';
import Header from './Layout.Header';
import Footer from './Layout.Footer';
import { H1 } from './Shared.Headings';

export default ({
    title,
    seoTitle,
    description,
    location,
    imgSrc,
    additionalTitleStyles = {},
    additionalMainStyles = {},
    children
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
        <Theme>
            <Root>
                <SEO
                    title={seoTitle || layoutTitle}
                    description={description}
                    imgSrc={imgSrc}
                />
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
        </Theme>
    );
};

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    overflow: hidden;
    line-height: 1.6rem;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};

    a {
        color: ${props => props.theme.textInverted};
        transition: color 0.4s ease-in-out;
        &:hover {
            color: ${props => props.theme.text};
        }
    }
`;

const TitleContainer = styled.div`
    margin: auto;
    max-width: 900px;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 2rem;
    box-sizing: content-box;
    animation: 0.5s fade-in-main ease-in-out;
`;

const Main = styled.main`
    margin: auto;
    max-width: 900px;
    padding-bottom: 2rem;
    padding-left: 1em;
    padding-right: 1em;
    box-sizing: content-box;
    animation: 0.5s fade-in-main ease-in-out;

    a {
        color: ${props => props.theme.accent3};
    }

    @keyframes fade-in-main {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
