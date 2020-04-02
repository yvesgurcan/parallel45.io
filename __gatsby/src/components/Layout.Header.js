import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Layout.Header.Logo';
import Menu from './Layout.Header.Menu';
import ResponsiveMenu from './Layout.Header.ResponsiveMenu';

const BREAKPOINT = 575;

export default ({ currentPageData, location }) => {
    const [smallScreen, setSmallScreen] = useState(
        window.innerWidth <= BREAKPOINT
    );
    useEffect(() => {
        function handleResize() {
            setSmallScreen(window.innerWidth <= BREAKPOINT);
        }
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <Header>
            <Content>
                <Title>
                    <Link to="/" state={{ ...(location.state || {}) }}>
                        <Logo />
                    </Link>
                </Title>
                {smallScreen ? (
                    <ResponsiveMenu
                        currentPageData={currentPageData}
                        location={location}
                    />
                ) : (
                    <Menu currentPageData={currentPageData} />
                )}
            </Content>
        </Header>
    );
};

const Header = styled.header`
    background: teal;
    color: white;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: ${BREAKPOINT}px) {
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
