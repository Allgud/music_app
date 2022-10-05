import React, {createContext} from "react";

export const theme = {
    dark: {
        background: '#F5F5F5',
        color: '#FFFFFF'
    },
    light: {
        background: '#FFFFFF',
        color: '#000000'
    } 
}

export const ThemeContext = createContext({
    theme: theme.dark,
    toggleTheme: () => {}
})

export const ThemeProvider = ({children}) => {
    return (
        <ThemeContext.Provider >
            {children}
        </ThemeContext.Provider>
    )
}