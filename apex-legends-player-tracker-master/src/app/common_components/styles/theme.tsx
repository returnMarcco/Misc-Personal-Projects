// Imports

// Styling
import createTheme, { Theme } from '@mui/material/styles/createTheme';

// End of imports

export const headerFooterBarTheme: Theme = createTheme({
    palette: {
        primary: {
            main: '#e87f23', // Orange
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main        : '#9f261e',
            light       : '#2c2c2c',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#f0f0f0',
        },
    },
});

export default headerFooterBarTheme;