import React from "react";
import { useTheme } from '../../../hook/useTheme'

import * as S from './styles'

function NavMenuItem({ link, title }) {
    const { theme } = useTheme()
    
    return (
        <S.NavMenuItem>
            <S.NavMenuItemLink to={link} theme={theme}>{title}</S.NavMenuItemLink>
        </S.NavMenuItem>
    )
}

export default NavMenuItem