import React from 'react';
import styled from 'styled-components';

const BREAKPOINT = 560;

export default ({ Image, children, reversed, animation }) => (
    <ProcessItem reversed={reversed} animation={animation}>
        <ProcessImage reversed={reversed}>
            <Image />
        </ProcessImage>
        <ProcessText reversed={reversed}>{children}</ProcessText>
    </ProcessItem>
);

const ProcessItem = styled.div`
    transition: color 0.3s ease-in-out, fill 0.3s ease-in-out;
    background: ${props => props.theme.backgroundInverted};
    padding: 2.75rem;
    margin-top: 2rem;
    display: flex;
    ${props => props.reversed && 'flex-direction: row-reverse;'}
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    fill: ${props => props.theme.text};

    &:hover {
        color: ${props => props.theme.accent3};
        fill: ${props => props.theme.accent3};
        svg {
            ${props => props.animation === 'spin' && `animation: 1s spin 1;`}
            ${props =>
                props.animation === 'rotate' &&
                `animation: 0.8s rotate 3; 
                transform-origin: 81px 20px;`}
            ${props =>
                props.animation === 'wave' &&
                `animation: 1.1s wave 2;
                transform-origin: bottom left;`}
        }
    }

    @media only screen and (max-width: ${BREAKPOINT}px) {
        flex-direction: column;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes rotate {
        50% {
            transform: rotate(40deg);
        }
    }

    @keyframes wave {
        40% {
            margin-left: 100px;
        }
        50% {
            transform: scaleX(-1) scaleY(1.1) skewX(10deg) skewY(5deg);
        }
        90% {
            transform: skewY(5deg);
        }
    }

    @keyframes wave {
        25% {
            margin-left: 10px;
            transform: translate(-15px, 1px) rotate(45deg);
        }
        60% {
            margin-left: 25px;
            transform: translate(13px, 10px) scaleX(-0.75) scaleY(1.1)
                skewY(5deg) rotate(10deg);
        }
        75% {
            margin-left: 15px;
            transform: translate(2px, -3px) rotate(45deg);
        }
        90% {
            transform: rotate(-1deg) skewX(-10deg);
        }
    }
`;

// scaleX(-0.8) scaleY(1.1) skewX(20deg) skewY(5deg)

const ProcessImage = styled.div`
    flex-shrink: 0;
    padding-${props => (props.reversed ? 'left' : 'right')}: 2rem;
    border-${props => (props.reversed ? 'left' : 'right')}: 1px solid;
    width: 100px;

    svg {
        width: 100px;
        height: 100px;
    }

    @media only screen and (max-width: ${BREAKPOINT}px) {
        padding: 0;
        padding-bottom: 1rem;
        border: none;
    }
`;

const ProcessText = styled.div`
    flex: 1;
    padding-${props => (props.reversed ? 'right' : 'left')}: 2rem;

    @media only screen and (max-width: ${BREAKPOINT}px) {
        padding: 0;
    }
`;
