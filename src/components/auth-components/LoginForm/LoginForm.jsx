import React from "react";
import { EnterButton, SignUpButton } from "../FormButtons/FormButtons";
import * as S from './styles'
import logo from '../../../img/logo_black.png'
import { useAuth } from '../../../hook/useAuth'

function LoginForm({onSubmitClick}) {
    const { auth } = useAuth() 

    return (
        <S.FormBox>
            <S.LogoImg src={logo} />
            <S.Form onSubmit={onSubmitClick}>
                <S.FormInput type='text' placeholder="E-mail" name="email"/>
                <S.FormInput type='password' placeholder="Пароль" name="pass"/>
                {!auth && <S.FormInput type='password' placeholder="Повторите пароль" name='repeatpass'/>}
                <S.ButtonBox>
                    {auth && <EnterButton />}
                    <SignUpButton flag={auth} />
                </S.ButtonBox>
            </S.Form>   
        </S.FormBox>
    )
}

export default LoginForm