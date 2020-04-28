import React from 'react';
import styled from 'styled-components';
import { H2 } from '../components/Shared.Headings';
import ExternalLink from '../components/Shared.ExternalLink';

export default ({
    client: { website, name, Image },
    index,
    lastClient,
    children
}) => (
    <Container index={index} lastClient={lastClient}>
        <ExternalLink href={website}>
            <H2>{name}</H2>
        </ExternalLink>
        <div>
            <ImageContainer index={index}>
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
    </Container>
);

const Container = styled.div`
    padding-top: ${props => (props.index ? '4rem' : '2rem')};
    padding-bottom: 3rem;
    border-bottom: ${props => (props.lastClient ? 'none' : '1px solid')};
`;

const ImageContainer = styled.div`
    float: right;
    margin-left: 2rem;
    margin-bottom: 1.5rem;

    @media only screen and (max-width: 650px) {
        margin-left: 0;
        float: none;
        display: flex;
        justify-content: center;
    }
`;

const ImageBorder = styled.div`
    border: 1px solid black;
`;
