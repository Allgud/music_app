import React from "react";
import { useSelector } from "react-redux";
import { EnterButton, SignUpButton } from "../FormButtons/FormButtons";
import * as S from './styles'
import logo from '../../../img/logo_black.png'

function LoginForm({onSubmitClick}) {
    const isUser = useSelector(state => state.user.isUser)
    const { status, message }= useSelector(state => state.user)

    return (
        <S.FormBox>
            <S.LogoImg src={logo} />
            <S.Form onSubmit={onSubmitClick}>
                {!isUser && <S.FormInput type='text' placeholder="Логин" name='login'/>}
                <S.FormInput type='text' placeholder="E-mail" name="email"/>
                <S.FormInput type='password' placeholder="Пароль" name="pass"/>
                <S.ButtonBox>
                    {isUser && <EnterButton />}
                    <SignUpButton flag={isUser} />
                </S.ButtonBox>
                
            </S.Form>
            {status === 'error' && <S.ErrorMessage>{message}</S.ErrorMessage>}  
        </S.FormBox>
    )
}

export default LoginForm