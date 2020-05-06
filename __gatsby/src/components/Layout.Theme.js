import React from 'react';
import { ThemeProvider } from 'styled-components';
import './layout.css';

const lightTheme = {
    background: 'rgb(230, 230, 230)',
    backgroundInverted: 'rgb(200, 200, 200)',
    text: 'rgb(40, 40, 40)',
    textInverted: 'rgb(240, 240, 240)',
    accent1: 'teal',
    accent2: 'rgb(90, 160, 180)',
    accent3: 'teal' // differs from accent1 in black theme
};

const darkTheme = {
    background: 'black',
    backgroundInverted: 'rgb(50, 50, 50)',
    text: 'rgb(150, 150, 150)',
    textInverted: 'rgb(230, 230, 230)',
    accent1: 'rgb(0, 110, 110)',
    accent2: 'rgb(90, 160, 180)',
    accent3: 'rgb(0, 171, 171)'
};

export default ({ children }) => (
    <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
);
