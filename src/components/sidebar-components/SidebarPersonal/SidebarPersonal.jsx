import React from "react";
import * as S from './styles'
import { useSelector } from "react-redux";
import { useTheme } from '../../../hook/useTheme'

function SidebarPersonal() {
    const userLogin = useSelector(state => state.user.userLogin)
    const { theme } = useTheme()

    return (
        <S.SidebarPersonal>
            <S.SidebarPersonalName
                theme={theme}
            >
                {userLogin ? userLogin : 'Log In'}</S.SidebarPersonalName>
            <S.SidebarAvatar theme={theme}/>
        </S.SidebarPersonal>
    )
}

export default SidebarPersonal