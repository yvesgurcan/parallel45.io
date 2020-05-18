import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

export default ({ children, onClick, to, ...props }) => (
    <InternalLink
        to={to}
        {...props}
        onClick={event => {
            trackCustomEvent({
                category: 'Inbound Link',
                action: 'click',
                label: to
            });
            if (onClick) {
                return onClick(event);
            }
        }}
    >
        {children}
    </InternalLink>
);

const InternalLink = styled(Link)`
    ${props => (props.unstyled ? 'color: inherit !important;' : '')}
`;
