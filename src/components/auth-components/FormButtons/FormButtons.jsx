import React from "react";
import * as S from './styles'

export const EnterButton = () => (
    <S.EnterButton
        type='button'
    >
        
    </S.EnterButton>
)

export function SignUpButton({flag}) {
    return (
        <S.SignUpButton 
            type="button"
            $flag={flag}
        >
            
        </S.SignUpButton>
    )
}
    