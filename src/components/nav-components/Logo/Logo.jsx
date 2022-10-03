import React from "react";
import img from '../../../img/logo.png'

import * as S from './styles'

const Logo = () => {
    return (
        <S.NavLogo>
            <S.LogoImage src={img} alt="logo" />
        </S.NavLogo>
    )
}

export default Logo

