import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from './Layout.Header.Logo';

export default ({ menuLinks }) => (
    <Header>
        <Content>
            <Title>
                <Link to="/">
                    <Logo />
                </Link>
            </Title>
            <div>
                <nav>
                    <NavList>
                        {menuLinks.map(
                            link =>
                                link.item && (
                                    <NavLink key={link.pathname}>
                                        <Link to={link.pathname}>
                                            {link.item}
                                        </Link>
                                    </NavLink>
                                )
                        )}
                    </NavList>
                </nav>
            </div>
        </Content>
    </Header>
);

const Header = styled.header`
    background: teal;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    a {
        color: white;
        &:hover {
            color: black;
        }
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    margin: 0;
`;

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
