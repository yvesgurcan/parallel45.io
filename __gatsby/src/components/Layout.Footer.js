import React from 'react';
import styled from 'styled-components';
import ExternalLink from './Shared.ExternalLink';

export default ({ social, repository }) => {
    return (
        <Footer>
            {social &&
                social.map(platform => (
                    <SocialLink key={platform.name}>
                        <ExternalLink key={platform.name} href={platform.url}>
                            {platform.name}
                        </ExternalLink>
                    </SocialLink>
                ))}
            <SocialLink>
                <ExternalLink href={`${repository}/tree/master/__gatsby`}>
                    repository
                </ExternalLink>
            </SocialLink>
        </Footer>
    );
};

const Footer = styled.footer`
    background: teal;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: white;

    a {
        color: white;
        &:hover {
            color: black;
        }
    }
`;

const SocialLink = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
`;
