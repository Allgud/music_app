import React from "react";
import { useSelector } from 'react-redux'
import {PrevBtn, PlayBtn, PauseBtn, NextBtn, RepeatBtn, ShuffleBtn} from '../PlayerButtons/PlayerButtons'
import * as S from './styles'

function PlayerControls() {
    const isPlaying = useSelector(state => state.bar.isPlaying)

    return (
        <S.PlayerControls>
            <PrevBtn />
            { isPlaying ? <PauseBtn /> : <PlayBtn /> }
            <NextBtn />
            <RepeatBtn />
            <ShuffleBtn />
        </S.PlayerControls>
    )
}

export default PlayerControls