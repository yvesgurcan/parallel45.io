import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import packageInfo from '../../package.json';
import SocialLink from './Layout.Footer.SocialLink';
import ExternalLink from './Shared.ExternalLink';

const BREAKPOINT = 450;

export default () => {
    const {
        site: { siteMetadata }
    } = useStaticQuery(graphql`
        query FooterQuery {
            site {
                siteMetadata {
                    repository
                    social {
                        name
                        url
                        image
                    }
                }
            }
        }
    `);

    return (
        <Footer>
            <SocialMediaList>
                {siteMetadata.social &&
                    siteMetadata.social.map(item => (
                        <SocialLink key={item.name} item={item} />
                    ))}
            </SocialMediaList>
            <Version href={siteMetadata.repository}>
                version {packageInfo.version}
            </Version>
        </Footer>
    );
};

const Footer = styled.footer`
    background: ${props => props.theme.accent1};
    padding: 1rem;
    padding-top: 2.7rem;
    padding-bottom: 0rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
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

const Version = styled(ExternalLink)`
    margin-bottom: 0.4rem;
    align-self: flex-end;

    @media only screen and (max-width: ${BREAKPOINT}px) {
        align-self: initial;
    }
`;
