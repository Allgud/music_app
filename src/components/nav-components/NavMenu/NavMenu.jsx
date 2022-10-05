import React from "react";
import NavMenuList from "../NavMenuList";
<<<<<<< HEAD
import {DarkThemeButton, LightThemeButton} from '../ThemeButtons/ThemeButtons'
import {useTheme} from '../../../hook/useTheme'

import * as S from './styles'
import {ThemeButton} from '../ThemeButtons/styles'

function NavMenu() {
    const {theme, themeHandler} = useTheme()

    return (
        <S.NavMenu>
            <NavMenuList />
            <ThemeButton onClick={event => themeHandler(event)}>
                {
                    theme === 'dark' ? <DarkThemeButton /> : <LightThemeButton />
                }
            </ThemeButton>
=======

import * as S from './styles'

function NavMenu() {
    return (
        <S.NavMenu>
            <NavMenuList />
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
        </S.NavMenu>
    )
}

export default NavMenu