import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from './Layout.Header.Logo';
import Menu from './Layout.Header.Menu';

export default () => {
    const {
        site: { siteMetadata }
    } = useStaticQuery(graphql`
        query HeaderQuery {
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
    return (
        <Header>
            <Content>
                <Title>
                    <Link to="/">
                        <Logo />
                    </Link>
                </Title>
                <Menu items={siteMetadata.menuLinks} />
            </Content>
        </Header>
    );
};

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
    padding: 1.4rem;
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
    &:active {
        animation: 1s 0.2s rotate360 ease-in-out forwards;

        @keyframes rotate360 {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }
    }
`;
