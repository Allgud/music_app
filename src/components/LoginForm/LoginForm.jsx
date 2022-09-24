import React from "react";
import { EnterButton, SignUpButton } from "../FormButtons/FormButtons";
import * as S from './styles'
import logo from '../../img/logo_black.png'

function LoginForm() {
    const flag = true

    return (
        <S.FormBox>
            <S.LogoImg src={logo} />
            <S.Form >
                <S.FormInput type='text' placeholder="Логин" />
                <S.FormInput type='password' placeholder="Пароль"/>
                {!flag && <S.FormInput type='password' placeholder="Повторите пароль"/>}
            </S.Form>
            {flag && <EnterButton />}
            <SignUpButton flag={flag} />
        </S.FormBox>
    )
}

export default LoginForm