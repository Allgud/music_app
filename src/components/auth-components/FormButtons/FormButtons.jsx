import React from "react";
import * as S from './styles'

export const EnterButton = () => (
    <S.EnterButton
        type='submit'
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
    