import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Header = ({ siteTitle, menuLinks }) => (
    <header
        style={{
            background: `teal`,
            marginBottom: `1.45rem`
        }}
    >
        <Content>
            <h1 style={{ margin: 0 }}>
                <Link to="/">{siteTitle}</Link>
            </h1>
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
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

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

export default Header;
