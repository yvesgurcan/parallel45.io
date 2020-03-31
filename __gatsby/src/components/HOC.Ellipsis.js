import React from 'react';
import styled from 'styled-components';

export default (baseTag, props, additionalStyles) => {
    const WrappedComponent = styled[baseTag]`
        @media only screen and (max-width: 300px) {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            word-wrap: break-word;
            word-break: break-all;
            overflow-wrap: break-word;
            color: inherit;
        }

        ${additionalStyles}
    `;

    return (
        <Container>
            <WrappedComponent {...props} />
        </Container>
    );
};

const Container = styled.div`
    width: calc(100vw - 30px);
`;
