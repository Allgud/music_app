import React from "react";
import * as S from './styles'
import { useAuth } from '../../../hook/useAuth'
import { useTheme } from '../../../hook/useTheme'

function SidebarPersonal() {
    const { user } = useAuth()
    const { theme } = useTheme()

    return (
        <S.SidebarPersonal>
            <S.SidebarPersonalName
                theme={theme}
            >
                {user ? user.username : 'Log In'}</S.SidebarPersonalName>
            <S.SidebarAvatar theme={theme}/>
        </S.SidebarPersonal>
    )
}

export default SidebarPersonal