import React from 'react';
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
