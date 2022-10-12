import React from "react";
import * as S from './styles'
import { useTheme } from '../../../hook/useTheme'

function Burger({handleView}) {
    const { theme } = useTheme()
    return (
        <S.NavBurger
            onClick={handleView}
        >
            <S.BurgerLine theme={theme}/> 
            <S.BurgerLine theme={theme}/> 
            <S.BurgerLine theme={theme}/>            
        </S.NavBurger>
    )
}

export default Burger