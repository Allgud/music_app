import React from "react";
import * as S from './styles'
<<<<<<< HEAD
import { useAuth } from '../../../hook/useAuth'

function SidebarPersonal() {
    const { auth } = useAuth()

    return (
        <S.SidebarPersonal>
            <S.SidebarPersonalName>{auth ? 'Sergey.Ivanov' : 'Log In'}</S.SidebarPersonalName>
=======

function SidebarPersonal() {
    return (
        <S.SidebarPersonal>
            <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
            <S.SidebarAvatar />
        </S.SidebarPersonal>
    )
}

export default SidebarPersonal