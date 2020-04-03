import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const pickLinkType = (item, currentPageData) =>
    item.pathname === currentPageData.pathname ? (
        <Link to={item.pathname}>[{item.item}]</Link>
    ) : (
        <Link to={item.pathname}>{item.item}</Link>
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
