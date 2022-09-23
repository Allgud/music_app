import React from "react";
import * as S from './styles'

function Burger({handleView}) {

    return (
        <S.NavBurger
            onClick={handleView}
        >
            <S.BurgerLine /> 
            <S.BurgerLine /> 
            <S.BurgerLine />            
        </S.NavBurger>
    )
}

export default Burger