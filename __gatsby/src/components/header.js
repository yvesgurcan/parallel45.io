import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

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
                        {menuLinks.map(link => (
                            <NavLink key={link.name}>
                                <Link to={link.link}>{link.name}</Link>
                            </NavLink>
                        ))}
                    </NavList>
                </nav>
            </div>
        </Content>
    </Header>
);

const Header = styled.header`
    background: teal;
    margin-bottom: 1.45rem;
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
    justify-content: space-between;
    margin: 0;
`;

const NavLink = styled.li`
    display: flex;
    margin-bottom: 0;
    flex: 1;
    margin-left: 1rem;
`;
