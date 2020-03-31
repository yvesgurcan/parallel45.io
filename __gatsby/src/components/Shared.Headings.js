import Ellipsis from './HOC.Ellipsis';

const resetStyles = `
    margin-bottom: 0.5em;
`;

export const H1 = props => Ellipsis('h1', props, resetStyles);
export const H2 = props => Ellipsis('h2', props, resetStyles);
export const H3 = props => Ellipsis('h3', props, resetStyles);
export const H4 = props => Ellipsis('h4', props, resetStyles);
export const H5 = props => Ellipsis('h5', props, resetStyles);
export const H6 = props => Ellipsis('h6', props, resetStyles);
