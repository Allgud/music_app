import React from "react";
import BarPlayerBlock from "../bar-components/BarPlayerBlock";
import * as S from './styles'

function Bar() {
    return (
        <S.Bar>
            <S.BarContent>
                <S.BarPlayerProgress />
                <BarPlayerBlock />
            </S.BarContent>
        </S.Bar>
    )
}

export default Bar