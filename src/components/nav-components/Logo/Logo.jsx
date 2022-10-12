import React from "react";
import img_light from '../../../img/logo.png'
import img_dark from '../../../img/logo_black.png'
import { useTheme } from "../../../hook/useTheme";

import * as S from './styles'

const Logo = () => {
    const { theme } = useTheme()
    return (
        <S.NavLogo>
            <S.LogoImage src={theme.title === 'dark' ? img_light : img_dark} alt="logo" />
        </S.NavLogo>
    )
}

export default Logo

