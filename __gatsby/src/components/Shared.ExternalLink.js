import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default ({ children, ...props }) => (
    <OutboundLink {...props} target="_blank" rel="noopener noreferrer">
        {children}
    </OutboundLink>
);
