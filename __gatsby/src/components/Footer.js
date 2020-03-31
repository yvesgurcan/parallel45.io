import React from 'react';
import styled from 'styled-components';
import ExternalLink from './ExternalLink';

export default ({ repository }) => {
    return (
        <Footer>
            <ExternalLink href={`${repository}/tree/master/__gatsby`}>
                repository
            </ExternalLink>
        </Footer>
    );
};

const Footer = styled.footer`
    background: teal;
    padding: 1rem;
    display: flex;
    justify-content: center;

    a {
        color: white;
        &:hover {
            color: black;
        }
    }
`;
