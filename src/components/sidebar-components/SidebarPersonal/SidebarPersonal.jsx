import React from "react";
import * as S from './styles'
import { useAuth } from '../../../hook/useAuth'

function SidebarPersonal() {
    const { auth } = useAuth()

    return (
        <S.SidebarPersonal>
            <S.SidebarPersonalName>{auth ? 'Sergey.Ivanov' : 'Log In'}</S.SidebarPersonalName>
            <S.SidebarAvatar />
        </S.SidebarPersonal>
    )
}

export default SidebarPersonal