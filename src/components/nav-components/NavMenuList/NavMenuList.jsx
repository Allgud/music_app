import React from "react";
import { useNavigate } from 'react-router-dom'
import { useTheme } from "../../../hook/useTheme";
import { getAllFavoriteTracks, resetFilters } from "../../../store/trackSlice";
import { logout } from '../../../store/userSlice'
import { useDispatch } from "react-redux";

import * as S from './styles'

function NavMenuList() {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onMainPageClick = () => {
        navigate('/')
        dispatch(resetFilters())
    }

    const onMyPlaylistClick = () => {
        navigate('/')
        dispatch(getAllFavoriteTracks())
    }

    const onMyCollectionsClick = () => {
        navigate('/collections')
    }
  
    return (
        <S.NavMenuList $theme={theme}>
            <S.NavMenuItem onClick={() => onMainPageClick()}/>Главная
            <S.NavMenuItem onClick={() => onMyPlaylistClick()}/>Мой плейлист
            <S.NavMenuItem onClick={() => onMyCollectionsClick()}/>Мои подборки
            <S.NavMenuItem onClick={() => dispatch(logout())}/>Выйти
        </S.NavMenuList>
    )
}

export default NavMenuList