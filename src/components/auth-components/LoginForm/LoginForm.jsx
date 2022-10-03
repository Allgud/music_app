import React from "react";
import { EnterButton, SignUpButton } from "../FormButtons/FormButtons";
import * as S from './styles'
import logo from '../../../img/logo_black.png'

function LoginForm({handleAuth}) {
    const flag = true

    return (
        <S.FormBox>
            <S.LogoImg src={logo} />
            <S.Form onSubmit={handleAuth}>
                <S.FormInput type='text' placeholder="Логин" name="login"/>
                <S.FormInput type='password' placeholder="Пароль" name="pass"/>
                {!flag && <S.FormInput type='password' placeholder="Повторите пароль" name='repeatpass'/>}
                <S.ButtonBox>
                    {flag && <EnterButton />}
                    <SignUpButton flag={flag} />
                </S.ButtonBox>
            </S.Form>   
        </S.FormBox>
    )
}

export default LoginForm