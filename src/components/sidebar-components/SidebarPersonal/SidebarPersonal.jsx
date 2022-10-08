import React from "react";
import * as S from './styles'
import { useAuth } from '../../../hook/useAuth'
import { useTheme } from '../../../hook/useTheme'

function SidebarPersonal() {
    const { auth } = useAuth()
    const { theme } = useTheme()

    return (
        <S.SidebarPersonal>
            <S.SidebarPersonalName
                theme={theme}
            >
                {auth ? 'Sergey.Ivanov' : 'Log In'}</S.SidebarPersonalName>
            <S.SidebarAvatar />
        </S.SidebarPersonal>
    )
}

export default SidebarPersonal