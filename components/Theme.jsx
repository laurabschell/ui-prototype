/* eslint-disable react/display-name */
import react from 'react'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#fffff"
        },
        secondary: {
            main: "#f00000"
        }
    },
    AppBar: {
        backgroundColor: "#ffffff",
        boxShadow: "none",
        border: "2px solid #52667a",
        borderRadius: "3px"
    }
});

const Theme = (props) => {
    const { children } = props;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export const withTheme = (Component) => {
    return (props) => {
        return (
            <Theme>
                <Component {...props} />
            </Theme>
        );
    };
};