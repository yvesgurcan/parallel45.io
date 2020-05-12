import React from 'react';
import { ThemeProvider } from 'styled-components';
import './Layout.css';

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

const darkThemeTime = new Date();
darkThemeTime.setHours(21);
darkThemeTime.setMinutes(0);
darkThemeTime.setSeconds(0);

const lightThemeTime = new Date();
lightThemeTime.setHours(8);
lightThemeTime.setMinutes(0);
lightThemeTime.setSeconds(0);

const cycleHourChange = {
    dark: darkThemeTime,
    light: lightThemeTime
};

const getTheme = () => {
    const now = new Date();

    const nextDarkTheme = cycleHourChange.dark;
    const nextLightTheme = cycleHourChange.light;

    // if the time for changing the theme today is already past, then add a day
    if (cycleHourChange.light.getTime() - now.getTime() < 0) {
        nextLightTheme.setDate(now.getDate() + 1);
    }

    if (cycleHourChange.dark.getTime() - now.getTime() < 0) {
        nextDarkTheme.setDate(now.getDate() + 1);
    }

    // the next theme is whichever is closer to be triggered from now
    if (nextDarkTheme - now.getTime() < nextLightTheme - now.getTime()) {
        return lightTheme;
    } else {
        return darkTheme;
    }
};

export default ({ children }) => (
    <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
);
