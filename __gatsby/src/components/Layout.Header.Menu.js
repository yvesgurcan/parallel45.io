import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export default ({ items }) => (
    <nav>
        <NavList>
            {items.map(
                item =>
                    item.item && (
                        <NavLink key={item.pathname}>
                            <Link to={item.pathname}>{item.item}</Link>
                        </NavLink>
                    )
            )}
        </NavList>
    </nav>
);

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
