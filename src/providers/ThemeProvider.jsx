import React, { useState, createContext, useMemo } from "react";
import { themes } from '../constants/constants'

export const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {}
})

export const ThemeProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState(themes.dark)

    const toggleTheme = () => {
        if(currentTheme === themes.dark) {
            setCurrentTheme(themes.light)
            return
        }

        if(currentTheme === themes.light) {
            setCurrentTheme(themes.dark)
            return
        }
    }

    const value = useMemo(() => ({theme: currentTheme, toggleTheme}), [currentTheme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

