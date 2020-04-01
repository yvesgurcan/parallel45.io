import React from 'react';
import styled from 'styled-components';
import ExternalLink from './Shared.ExternalLink';
import TextOrIcon from './HOC.TextOrIcon';

export default ({ item }) => {
    return (
        <SocialLink key={item.name} href={item.url}>
            {TextOrIcon(item)}
        </SocialLink>
    );
};
const SocialLink = styled(ExternalLink)`
    padding: 0.4rem;
    padding-top: 0.6rem;
    padding-bottom: 0.4rem;
`;
