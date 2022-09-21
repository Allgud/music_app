import React from "react";
import {PrevBtn, PlayBtn, NextBtn, RepeatBtn, ShuffleBtn} from '../PlayerButtons/PlayerButtons'
import * as S from './styles'

function PlayerControls() {
    return (
        <S.PlayerControls>
            <PrevBtn />
            <PlayBtn />
            <NextBtn />
            <RepeatBtn />
            <ShuffleBtn />
        </S.PlayerControls>
    )
}

export default PlayerControls