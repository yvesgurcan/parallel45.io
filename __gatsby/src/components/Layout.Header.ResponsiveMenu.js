import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const isVisibleLink = (item, currentPageData) =>
    item.pathname !== currentPageData.pathname && (
        <Link to={item.pathname}>{item.item}</Link>
    );

export default ({ currentPageData, location }) => {
    const {
        site: { siteMetadata }
    } = useStaticQuery(graphql`
        query ResponsiveMenuQuery {
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

    const { state } = location;
    const [visibleMenu, setVisibleMenu] = useState(state.visibleMenu || false);

    return (
        <Fragment>
            <nav>
                <NavList>
                    <MainNavLink onClick={() => setVisibleMenu(!visibleMenu)}>
                        <NavDropdown>
                            {currentPageData.item}
                            <Arrow visibleMenu={visibleMenu}>▾</Arrow>
                        </NavDropdown>
                    </MainNavLink>
                    {siteMetadata.menuLinks.map(
                        item =>
                            !item.hidden &&
                            item.item &&
                            isVisibleLink(item, currentPageData) && (
                                <NavLink
                                    visibleMenu={visibleMenu}
                                    key={item.pathname}
                                >
                                    <Link
                                        to={item.pathname}
                                        state={{ visibleMenu }}
                                    >
                                        {item.item}
                                    </Link>
                                </NavLink>
                            )
                    )}
                </NavList>
            </nav>
        </Fragment>
    );
};

const NavList = styled.ul`
    margin: 0;
    text-align: center;
`;

const BaseNavLink = styled.li`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
`;

const MainNavLink = styled(BaseNavLink)`
    cursor: pointer;
    transition: color 0.4s ease-in-out;
    &:hover {
        color: black;
    }
`;

const NavDropdown = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 0.4rem;
`;

const Arrow = styled.div`
    margin-left: 0.2rem;
    margin-top: 0.1rem;
    transition: transform 0.4s ease-in-out;
    ${props => props.visibleMenu && 'transform: rotate(-180deg);'}
`;

const NavLink = styled(MainNavLink)`
    transition: height 0.5s ease-in-out, margin 0.15s ease-out,
        opacity 0.3s linear 0.1s;
    height: 20px;
    opacity: 1;
    ${props =>
        !props.visibleMenu &&
        `
            pointer-events: none;
            height: 0;
            margin: 0;
            opacity: 0;
            transition: height 0.5s ease-in-out, margin 0.3s ease-out,
        opacity 0.2s linear;`}
`;
