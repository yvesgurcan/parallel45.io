import React from 'react';
import styled from 'styled-components';

const BREAKPOINT = 950;

export default ({ videoId, ratio = 1 }) => (
    <Embed ratio={ratio}>
        <iframe
            title={videoId}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    </Embed>
);

const Embed = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    padding-bottom: 0;

    iframe {
        width: ${props => 100 * props.ratio}%;
        height: ${props => 506 * props.ratio}px;
        margin-bottom: 0;
    }

    @media only screen and (max-width: ${BREAKPOINT}px) {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;

        iframe,
        object,
        embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin-bottom: 0;
        }
    }
`;

/*
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/QILiHiTD3uc' frameborder='0' allowfullscreen></iframe></div>
*/
