import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import InternalLink from './Shared.InternalLink';

const pickLinkType = (item, currentPageData) =>
    item.pathname === currentPageData.pathname ? (
        <InternalLink to={item.pathname}>[{item.item}]</InternalLink>
    ) : (
        <InternalLink to={item.pathname}>{item.item}</InternalLink>
    );

export default ({ currentPageData }) => {
    const {
        site: { siteMetadata }
    } = useStaticQuery(graphql`
        query MenuQuery {
            site {
                siteMetadata {
                    menuLinks {
                        pathname
                        item
                        title
                        hidden
                    }
                }
            }
        }
    `);

    return (
        <nav>
            <NavList>
                {siteMetadata.menuLinks.map(
                    item =>
                        (!item.hidden ||
                            currentPageData.pathname === item.pathname) &&
                        item.item && (
                            <NavLink key={item.pathname}>
                                {pickLinkType(item, currentPageData)}
                            </NavLink>
                        )
                )}
            </NavList>
        </nav>
    );
};

const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
`;

const NavLink = styled.li`
    display: flex;
    justify-items: right;
    margin: 0.5rem;
`;
