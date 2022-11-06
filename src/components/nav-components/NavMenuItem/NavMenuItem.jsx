import React from "react";
import { useDispatch } from 'react-redux'
import { logout } from "../../../store/userSlice";
import { useTheme } from '../../../hook/useTheme'

import * as S from './styles'

function NavMenuItem({ link, title }) {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    
    return (
        <S.NavMenuItem>
            <S.NavMenuItemLink to={link} theme={theme} onClick={() => dispatch(logout(title))}>{title}</S.NavMenuItemLink>
        </S.NavMenuItem>
    )
}

export default NavMenuItem