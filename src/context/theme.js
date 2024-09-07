import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ce93d8',
            light: '#E0C2FF',
            contrastText: '#47008F',
        },
    }
})

const lightTheme = createTheme({
    palette: {
        primary: {
            light: '#ffb74d',
            main: '#f57c00',
            dark: '#3f50b5',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
})

export const ThemeContext = createContext(null);

export const Theme = ({children}) => {
    const [theme, setTheme] = useState('light');


    return <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>
}