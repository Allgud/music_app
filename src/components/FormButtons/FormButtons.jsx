import React from "react";
import * as S from './styles'

export const EnterButton = ({handleAuth}) => (
    <S.EnterButton
        onClick={handleAuth}
    >
        Войти
    </S.EnterButton>
)

export function SignUpButton({flag}) {
    return (
        <S.SignUpButton
            type="submit"
            $flag={flag}
        >
            Зарегистрироваться
        </S.SignUpButton>
    )
}
    