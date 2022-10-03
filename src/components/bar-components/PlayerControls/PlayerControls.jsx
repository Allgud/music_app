import React, {useContext} from "react";
import {PrevBtn, PlayBtn, NextBtn, RepeatBtn, ShuffleBtn, PauseBtn} from '../PlayerButtons/PlayerButtons'
import * as S from './styles'
import { useStatus } from '../../../hook/useStatus'
import { HandlerContext } from '../../context/context'

function PlayerControls() {
    const { isPlaying } = useStatus()
    const handlePlayPauseClick = useContext(HandlerContext)

    return (
        <S.PlayerControls onClick={handlePlayPauseClick(isPlaying)}>
            <PrevBtn />
            {
                !isPlaying ? <PlayBtn /> : <PauseBtn />
            }
            <NextBtn />
            <RepeatBtn />
            <ShuffleBtn />
        </S.PlayerControls>
    )
}

export default PlayerControls