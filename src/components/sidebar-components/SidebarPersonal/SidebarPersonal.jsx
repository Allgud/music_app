import React from "react";
import * as S from './styles'
import { useSelector } from "react-redux";
import { useTheme } from '../../../hook/useTheme'

function SidebarPersonal() {
    const username = useSelector(state => state.user.user.username)
    
    const { theme } = useTheme()

    return (
        <S.SidebarPersonal>
            {username ?<S.SidebarPersonalName theme={theme}>{username}</S.SidebarPersonalName> : 'Log In'}
            <S.SidebarAvatar theme={theme}/>
        </S.SidebarPersonal>
    )
}

export default SidebarPersonal