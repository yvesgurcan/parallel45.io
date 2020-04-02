import React, { Fragment } from 'react';
import styled from 'styled-components';
import { H2 } from '../components/Shared.Headings';
import ExternalLink from '../components/Shared.ExternalLink';

export default ({ client: { website, name, Image }, children }) => (
    <Fragment>
        <ExternalLink href={website}>
            <H2>{name}</H2>
        </ExternalLink>
        <div>
            <ImageContainer>
                <ImageBorder>
                    {Image && (
                        <ExternalLink href={website}>
                            <Image />
                        </ExternalLink>
                    )}
                </ImageBorder>
            </ImageContainer>
            {children}
        </div>
    </Fragment>
);

const ImageContainer = styled.div`
    float: right;
    margin-left: 2rem;
    margin-bottom: 1.5rem;

    @media only screen and (max-width: 600px) {
        margin-left: 0;
        float: none;
        display: flex;
        justify-content: center;
    }
`;

const ImageBorder = styled.div`
    border: 1px solid black;
`;
