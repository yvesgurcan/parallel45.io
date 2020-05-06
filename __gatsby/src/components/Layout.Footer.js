import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import SocialLink from './Layout.Footer.SocialLink';

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
            <EditLink>
                <SocialLink
                    invisible
                    item={{ name: 'edit', url: siteMetadata.repository }}
                />
            </EditLink>
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

const EditLink = styled.div`
    margin-top: 0.4rem;
    margin-bottom: 0.2rem;
    * {
        padding: 0;
    }

    a {
        color: ${props => props.theme.accent1} !important;

        &:hover {
            color: ${props => props.theme.textInverted} !important;
        }
    }
`;
