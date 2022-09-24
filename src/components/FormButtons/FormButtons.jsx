import React from "react";
import * as S from './styles'

export const EnterButton = () => (
    <S.EnterButton>Войти</S.EnterButton>
)

export function SignUpButton({flag}) {
    return (
        <S.SignUpButton $flag={flag}>Зарегистрироваться</S.SignUpButton>
    )
}
    