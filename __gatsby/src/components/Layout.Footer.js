import React from 'react';
import styled from 'styled-components';
import SocialLink from './Layout.Footer.SocialLink';

export default ({ social, repository }) => {
    return (
        <Footer>
            <SocialMediaList>
                {social &&
                    social.map(item => (
                        <SocialLink key={item.name} item={item} />
                    ))}
            </SocialMediaList>
            <EditLink item={{ name: 'edit', url: repository }} />
        </Footer>
    );
};

const Footer = styled.footer`
    background: teal;
    padding: 1rem;
    padding-top: 2.5rem;
    padding-bottom: 0rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    color: white;
`;

const SocialMediaList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
        color: white;
        svg {
            fill: white !important;
        }

        &:hover {
            color: black;
            svg {
                fill: black !important;
            }
        }
    }
`;

const EditLink = styled(SocialLink)`
    padding-top: 0;
`;
