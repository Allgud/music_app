import React from "react";
import NavMenuList from "../NavMenuList";
import { DarkThemeButton, LightThemeButton } from '../ThemeButtons/ThemeButtons'
import { useTheme } from "../../../hook/useTheme";
import * as S from './styles'
import {ThemeButton} from '../ThemeButtons/styles'

function NavMenu() {
    const {theme, toggleTheme } = useTheme() 
    
    return (
        <S.NavMenu>
            <NavMenuList />
            <ThemeButton onClick={toggleTheme} theme={theme}>
                {theme.title === 'dark' ? <DarkThemeButton /> : <LightThemeButton />}
            </ThemeButton>
        </S.NavMenu>
    )
}
export default NavMenu