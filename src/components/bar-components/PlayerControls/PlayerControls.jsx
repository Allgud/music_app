import React, { useContext } from "react";
import {PrevBtn, PlayBtn, PauseBtn, NextBtn, RepeatBtn, ShuffleBtn} from '../PlayerButtons/PlayerButtons'
import { useStatus } from "../../../hook/useStatus";
import { HandlerContext } from "../../context/context";
import * as S from './styles'

function PlayerControls() {
    const {isPlaying} = useStatus()
    const handlePlayPauseClick = useContext(HandlerContext)

    return (
        <S.PlayerControls onClick={() => handlePlayPauseClick(!isPlaying)}>
            <PrevBtn />
            { isPlaying ? <PauseBtn /> : <PlayBtn /> }
            <NextBtn />
            <RepeatBtn />
            <ShuffleBtn />
        </S.PlayerControls>
    )
}

export default PlayerControls