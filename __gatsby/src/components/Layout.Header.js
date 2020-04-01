import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from './Layout.Header.Logo';
import Menu from './Layout.Header.Menu';

export default ({ menuLinks }) => (
    <Header>
        <Content>
            <Title>
                <Link to="/">
                    <Logo />
                </Link>
            </Title>
            <Menu items={menuLinks} />
        </Content>
    </Header>
);

const Header = styled.header`
    background: teal;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
    }

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
