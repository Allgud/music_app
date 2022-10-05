import React from "react";
import NavMenuList from "../NavMenuList";
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
        </S.NavMenu>
    )
}
export default NavMenu