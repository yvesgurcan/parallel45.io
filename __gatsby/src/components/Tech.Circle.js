import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const getImage = function(images, item) {
    const imageData =
        images &&
        images.find(
            image => image.childImageSharp.fixed.originalName === item.image
        );

    if (imageData && imageData.childImageSharp) {
        return (
            <Fragment>
                <div className="item-image">
                    <Img fixed={imageData.childImageSharp.fixed} />
                </div>
                <ItemInnerShadow title={item.name} />
            </Fragment>
        );
    }

    return <div className="item-name">{item.name}</div>;
};

const BREAKPOINT = 600;

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
const GROUP_CIRCLE_DIAMETER = 300;
const REDUCED_GROUP_CIRCLE_DIAMETER = GROUP_CIRCLE_DIAMETER / 1.6;

const ITEM_CIRCLE_BORDER = 2;
const ITEM_CIRCLE_DIAMETER = 80;
const ITEM_CIRCLE_PADDING = 10;
const ITEM_INNER_SHADOW = 3;
const REDUCED_ITEM_CIRCLE_DIAMETER = ITEM_CIRCLE_DIAMETER / 1.6;

const circleStyles = `
    border-radius: 50%;
`;

const Container = styled.div`
    padding-right: 3rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin: auto;
    width: ${GROUP_CIRCLE_DIAMETER}px;

    @media only screen and (max-width: ${BREAKPOINT}px) {
        width: ${REDUCED_GROUP_CIRCLE_DIAMETER}px;
    }
`;

const ListCircle = styled.ul`
    ${circleStyles}
    display: flex;
    width: 100%;
    padding-top: 100%;
    border: ${GROUP_CIRCLE_BORDER}px solid;
    transform: rotate(-90deg);
`;

const ItemCircle = styled.li`
    ${circleStyles}

    .item-name {
        font-size: 75%;
        color: grey;
        text-align: center;
        justify-content: center;
        align-content: center;
        margin: auto;
        flex: 1;
    }

    .item-name,
    .item-image {
        transform: rotate(-270deg);
    }

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
`;

const ItemInnerShadow = styled.div`
    position: absolute;
    border-radius: 50%;
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
