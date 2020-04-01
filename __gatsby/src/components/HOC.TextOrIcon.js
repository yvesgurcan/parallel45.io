import React from 'react';
import styled from 'styled-components';
import SocialImages from './Layout.Footer.SocialImages';

export default item => {
    if (item.image) {
        return <SocialImages image={item.image} />;
    }

    if (item.name) {
        return item.name;
    }

    return null;
};
