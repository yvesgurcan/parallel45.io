import React from 'react';
import styled from 'styled-components';

export default ({ egg = true }) => {
    return (
        <Logo egg={egg}>
            <ParallelTop />
            <Layer>
                <ParallelLeft />
                <Text>45</Text>
                <ParallelRight />
            </Layer>
            <ParallelBottom />
        </Logo>
    );
};

const checkDate = (month, day) => {
    const now = new Date();
    return now.getMonth() === month - 1 && now.getDate() === day;
};

const Logo = styled.div`
    display: grid;
    grid-template-rows: 4px auto 4px;
    ${({ egg }) =>
        (egg && checkDate(2, 25) && `transform: rotate(90deg);`) || ''}
    ${({ egg }) =>
        (egg && checkDate(4, 1) && `transform: rotate(180deg);`) || ''}
    ${({ egg }) =>
        (egg && checkDate(5, 5) && `transform: rotate(-10deg);`) || ''}
    ${({ egg }) =>
        (egg && checkDate(7, 28) && `transform: rotate(270deg);`) || ''}

    #parallel-top {
        transition: transform 1s ease-out;
        transform-origin: center left;
    }
    #parallel-bottom {
        transition: transform 1s ease-out;
        transform-origin: center right;
    }

    #parallel-left {
        transform-origin: top center;
        transition: transform 1s ease-out, visibility 1s ease-out;
    }
    #parallel-right {
        transform-origin: bottom center;
        transition: transform 1s ease-out, visibility 1s ease-out;
    }

    &:hover {
        #parallel-top {
            transform: scale(0, 1);
        }
        #parallel-bottom {
            transform: scale(0, 1);
        }

        #parallel-left {
            transform: scale(1, 1);
            visibility: visible;
        }
        #parallel-right {
            transform: scale(1, 1);
            visibility: visible;
        }
    }
`;

const Layer = styled.div`
    display: grid;
    grid-template-columns: 4px auto 4px;
`;

const Parallel = styled.div``;

const ParallelTop = styled(Parallel).attrs({ id: 'parallel-top' })`
    border-top: 0.1em solid;
`;
const ParallelBottom = styled(Parallel).attrs({ id: 'parallel-bottom' })`
    border-bottom: 0.1em solid;
    width: calc(100% + 1px);
`;

const ParallelLeft = styled(Parallel).attrs({ id: 'parallel-left' })`
    border-left: 0.1em solid;
    transform: scale(1, 0);
`;
const ParallelRight = styled(Parallel).attrs({ id: 'parallel-right' })`
    border-right: 0.1em solid;
    transform: scale(1, 0);
`;

const Text = styled.div`
    font-family: 'Questrial', sans-serif;
    padding-top: 0.09em;
    padding-left: 0.2em;
    padding-right: 0.2em;
    line-height: 1.1em;
`;
