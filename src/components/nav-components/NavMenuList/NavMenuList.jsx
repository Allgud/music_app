import React from "react";
import { useTheme } from "../../../hook/useTheme";
import { getAllFavoriteTracks, resetFilters } from "../../../store/trackSlice";
import { logout } from '../../../store/userSlice'
import { useDispatch } from "react-redux";

import * as S from './styles'

function NavMenuList() {
    const { theme } = useTheme()
    const dispatch = useDispatch()
  
    return (
        <S.NavMenuList $theme={theme}>
            <S.NavMenuItem onClick={() => dispatch(resetFilters())}/>Главная
            <S.NavMenuItem onClick={() => dispatch(getAllFavoriteTracks())}/>Мой плейлист
            <S.NavMenuItem onClick={() => dispatch(logout())}/>Выйти
        </S.NavMenuList>
    )
}

export default NavMenuList