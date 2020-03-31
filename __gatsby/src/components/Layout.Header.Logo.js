import React from 'react';
import styled from 'styled-components';

export default () => {
    return <Parallel>45</Parallel>;
};

const Parallel = styled.div`
    font-family: 'Questrial', sans-serif;
    border-top: 0.1em solid;
    border-bottom: 0.1em solid;
    padding-top: 0.025em;
    padding-left: 0.2em;
    padding-right: 0.2em;
    line-height: 1.1em;
`;
