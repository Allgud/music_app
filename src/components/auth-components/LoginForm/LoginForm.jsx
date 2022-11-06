import React, { useState }from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup, alreadyHaveAccount } from "../../../store/userSlice";
import * as S from './styles'
import logo from '../../../img/logo_black.png'

function LoginForm() {
    const isUser = useSelector(state => state.user.isUser)
    const { status, message } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <S.FormBox>
            <S.LogoImg src={logo} />
            <S.Form>
                {!isUser && <S.FormInput type='text' placeholder="Логин" onChange={(evt) => setUsername(evt.target.value)} value={username} />}
                <S.FormInput 
                    type='text' 
                    placeholder="E-mail" 
                    onChange={(evt) => setEmail(evt.target.value)} 
                    value={email} 
                />
                <S.FormInput type='password' placeholder="Пароль" onChange={(evt) => setPassword(evt.target.value)} value={password} />
                <S.ButtonBox>
                    {isUser && <S.EnterButton type='button' onClick={() => dispatch(login({email, password}))}>Войти</S.EnterButton>}
                    <S.SignUpButton type='button' $flag={isUser} onClick={() => dispatch(signup({username, email, password}))}>Зарегистрироваться</S.SignUpButton>
                </S.ButtonBox>
            </S.Form>
            {(!isUser && status !== 'error') && <S.NavLinkToAuth to={'/auth'} onClick={() => dispatch(alreadyHaveAccount())}>Уже есть аккаунт</S.NavLinkToAuth>}
            {status === 'error' && <S.ErrorMessage>{message}</S.ErrorMessage>}  
        </S.FormBox>
    )
}

export default LoginForm