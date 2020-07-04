import React from 'react';
import styled from 'styled-components';
import twitter from '../../content/assets/social-media/twitter.svg';
import facebook from '../../content/assets/social-media/facebook.svg';
import linkedin from '../../content/assets/social-media/linkedin.svg';
import gitlab from '../../content/assets/social-media/gitlab.svg';
import instagram from '../../content/assets/social-media/instagram.svg';

const imageComponents = {
    twitter,
    facebook,
    linkedin,
    gitlab,
    instagram
};

export default ({ image }) => {
    const ImageComponent = imageComponents[image] || <div />;
    const StandardizedImage = styled(ImageComponent)`
        width: 24px;
        height: 24px;
        flex: 1;

        path {
            transition: fill 0.4s ease-in-out;
            fill: ${props => props.theme.textInverted};
        }

        &:hover path {
            fill: ${props => props.theme.text};
        }
    `;
    return <StandardizedImage />;
};
