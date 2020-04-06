import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const BREAKPOINT = 550;
const SUPER_SMALL_BREAKPOINT = 350;

const getImage = function(images, item) {
    const imageData =
        images &&
        images.find(
            image => image.childImageSharp.fixed.originalName === item.image
        );

    return (
        <Fragment>
            <ItemInnerShadow title={item.name} />
            <ItemName>{item.name}</ItemName>
            {imageData && imageData.childImageSharp && (
                <ItemImage>
                    <Img fixed={imageData.childImageSharp.fixed} />
                </ItemImage>
            )}
            <ItemInnerShadow2 />
        </Fragment>
    );
};

export default ({ data, images, smallImages, itemCount }) => {
    const [smallScreen, setSmallScreen] = useState(
        typeof window !== 'undefined' && window.innerWidth <= BREAKPOINT
    );
    useEffect(() => {
        function handleResize() {
            setSmallScreen(
                typeof window !== 'undefined' && window.innerWidth <= BREAKPOINT
            );
        }
        typeof window !== 'undefined' &&
            window.addEventListener('resize', handleResize);
    }, []);
    return (
        <Container>
            <ListCircle>
                {data.items.map((item, index) => (
                    <Fragment>
                        <ItemCircle
                            key={item.name}
                            itemCount={itemCount}
                            index={index}
                        >
                            {getImage(smallScreen ? smallImages : images, item)}
                        </ItemCircle>
                    </Fragment>
                ))}
            </ListCircle>
        </Container>
    );
};

const GROUP_CIRCLE_BORDER = 5;
const GROUP_CIRCLE_DIAMETER = 375;
const REDUCED_GROUP_CIRCLE_DIAMETER = GROUP_CIRCLE_DIAMETER / 1.6;

const ITEM_CIRCLE_BORDER = 2;
const ITEM_CIRCLE_DIAMETER = 85;
const ITEM_CIRCLE_PADDING = 10;
const ITEM_INNER_SHADOW = 3;
const REDUCED_ITEM_CIRCLE_DIAMETER = 55;

const circleStyles = `
    border-radius: 50%;
`;

const Container = styled.div`
    box-sizing: content-box;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin: auto;
    width: ${GROUP_CIRCLE_DIAMETER}px;

    @media only screen and (max-width: ${BREAKPOINT}px) {
        width: ${REDUCED_GROUP_CIRCLE_DIAMETER}px;
    }

    @media only screen and (max-width: ${SUPER_SMALL_BREAKPOINT}px) {
        padding: 0;
        padding-bottom: 2rem;
        width: 100%;
    }
`;

const ListCircle = styled.ul`
    ${circleStyles}
    margin: 0;
    width: 100%;
    padding-top: 100%;
    border: ${GROUP_CIRCLE_BORDER}px solid;
    transform: rotate(-90deg);

    @media only screen and (max-width: ${SUPER_SMALL_BREAKPOINT}px) {
        width: 100%;
        border: none;
        padding: 0;
        transform: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const ItemCircle = styled.li`
    ${circleStyles}

    position: absolute;
    display: flex;
    overflow: hidden;
    cursor: pointer;
    list-style: none;
    background: white;
    width: ${ITEM_CIRCLE_DIAMETER}px;
    height: ${ITEM_CIRCLE_DIAMETER}px;
    padding: ${ITEM_CIRCLE_PADDING}px;
    border: ${ITEM_CIRCLE_BORDER}px solid;
    margin-top: calc(
        -${GROUP_CIRCLE_DIAMETER + ITEM_CIRCLE_DIAMETER}px / 2 - ${ITEM_CIRCLE_PADDING}px
    );
    margin-left: calc(
        ${GROUP_CIRCLE_DIAMETER - ITEM_CIRCLE_DIAMETER}px / 2 -
            ${ITEM_CIRCLE_PADDING}px
    );
    transform: ${props => {
        const rotation = (360 / props.itemCount) * props.index;
        return `
                rotate(${rotation}deg)
                translate(${(GROUP_CIRCLE_DIAMETER + GROUP_CIRCLE_BORDER) /
                    2}px) 
                rotate(-${rotation}deg)
            `;
    }};

    @media only screen and (max-width: ${BREAKPOINT}px) {
        width: ${REDUCED_ITEM_CIRCLE_DIAMETER}px;
        height: ${REDUCED_ITEM_CIRCLE_DIAMETER}px;

        margin-top: calc(
            -${REDUCED_GROUP_CIRCLE_DIAMETER + REDUCED_ITEM_CIRCLE_DIAMETER}px /
                2 - ${ITEM_CIRCLE_PADDING}px
        );
        margin-left: calc(
            ${REDUCED_GROUP_CIRCLE_DIAMETER - REDUCED_ITEM_CIRCLE_DIAMETER}px /
                2 - ${ITEM_CIRCLE_PADDING}px
        );

        transform: ${props => {
            const rotation = (360 / props.itemCount) * props.index;
            return `
                rotate(${rotation}deg)
                translate(${(REDUCED_GROUP_CIRCLE_DIAMETER +
                    GROUP_CIRCLE_BORDER) /
                    2}px) 
                rotate(-${rotation}deg)
            `;
        }};
    }

    @media only screen and (max-width: ${SUPER_SMALL_BREAKPOINT}px) {
        margin: 0.3rem;
        position: relative;
        transform: none;
    }
`;

const ItemInnerShadow = styled.div.attrs({ className: 'item-shadow' })`
    position: absolute;
    border-radius: 50%;
    z-index: 1;

    &:hover {
        & ~ .item-image {
            opacity: 0;
        }

        & ~ .item-name {
            opacity: 1;
        }
    }

    width: ${ITEM_CIRCLE_DIAMETER +
        ITEM_CIRCLE_PADDING * 2 +
        ITEM_CIRCLE_BORDER * 2}px;
    height: ${ITEM_CIRCLE_DIAMETER +
        ITEM_CIRCLE_PADDING * 2 +
        ITEM_CIRCLE_BORDER * 2}px;

    margin-left: -${ITEM_CIRCLE_PADDING + ITEM_CIRCLE_BORDER}px;
    margin-top: -${ITEM_CIRCLE_PADDING + ITEM_CIRCLE_BORDER}px;

    box-shadow: 3px 0px 4px ${ITEM_INNER_SHADOW}px white inset,
        -3px 0px 4px ${ITEM_INNER_SHADOW}px white inset;

    @media only screen and (max-width: ${BREAKPOINT}px) {
        width: ${REDUCED_ITEM_CIRCLE_DIAMETER +
            ITEM_CIRCLE_PADDING * 2 +
            ITEM_CIRCLE_BORDER * 2}px;
        height: ${REDUCED_ITEM_CIRCLE_DIAMETER +
            ITEM_CIRCLE_PADDING * 2 +
            ITEM_CIRCLE_BORDER * 2}px;

        margin-left: -${ITEM_CIRCLE_PADDING + ITEM_CIRCLE_BORDER}px;
        margin-top: -${ITEM_CIRCLE_PADDING + ITEM_CIRCLE_BORDER}px;
    }
`;

const ItemInnerShadow2 = styled.div`
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;

    width: ${ITEM_CIRCLE_DIAMETER +
        ITEM_CIRCLE_PADDING * 2 +
        ITEM_CIRCLE_BORDER * 2}px;
    height: ${ITEM_CIRCLE_DIAMETER +
        ITEM_CIRCLE_PADDING * 2 +
        ITEM_CIRCLE_BORDER * 2}px;

    margin-left: -${ITEM_CIRCLE_PADDING + ITEM_CIRCLE_BORDER}px;
    margin-top: -${ITEM_CIRCLE_PADDING + ITEM_CIRCLE_BORDER}px;

    box-shadow: 3px 0px 4px ${ITEM_INNER_SHADOW}px white inset,
        -3px 0px 4px ${ITEM_INNER_SHADOW}px white inset;

    @media only screen and (max-width: ${BREAKPOINT}px) {
        width: ${REDUCED_ITEM_CIRCLE_DIAMETER +
            ITEM_CIRCLE_PADDING * 2 +
            ITEM_CIRCLE_BORDER * 2}px;
        height: ${REDUCED_ITEM_CIRCLE_DIAMETER +
            ITEM_CIRCLE_PADDING * 2 +
            ITEM_CIRCLE_BORDER * 2}px;

        margin-left: -${ITEM_CIRCLE_PADDING + ITEM_CIRCLE_BORDER}px;
        margin-top: -${ITEM_CIRCLE_PADDING + ITEM_CIRCLE_BORDER}px;
    }
`;

const ItemImage = styled.div.attrs({ className: 'item-image' })`
    transform: rotate(-270deg);
    transition: opacity 0.25s ease-in-out;
    pointer-events: none;
    background: white;
    background: transparent;

    @media only screen and (max-width: ${SUPER_SMALL_BREAKPOINT}px) {
        transform: none;
        margin-top: 3px;
        margin-left: 2px;
    }
`;

const ItemName = styled.div.attrs({ className: 'item-name' })`
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    pointer-events: none;
    position: absolute;
    font-size: 85%;
    color: grey;
    align-items: center;
    transform: rotate(-270deg);
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: ${ITEM_CIRCLE_DIAMETER + ITEM_CIRCLE_BORDER * 2}px;
    height: ${ITEM_CIRCLE_DIAMETER + ITEM_CIRCLE_BORDER * 2}px;

    margin-left: -${ITEM_CIRCLE_BORDER}px;
    margin-top: -${ITEM_CIRCLE_BORDER}px;

    @media only screen and (max-width: ${BREAKPOINT}px) {
        font-size: 75%;
        width: ${REDUCED_ITEM_CIRCLE_DIAMETER + ITEM_CIRCLE_BORDER * 2}px;
        height: ${REDUCED_ITEM_CIRCLE_DIAMETER + ITEM_CIRCLE_BORDER * 2}px;

        margin-left: -${ITEM_CIRCLE_BORDER}px;
        margin-top: -${ITEM_CIRCLE_BORDER}px;
    }

    @media only screen and (max-width: ${SUPER_SMALL_BREAKPOINT}px) {
        transform: none;
    }
`;
