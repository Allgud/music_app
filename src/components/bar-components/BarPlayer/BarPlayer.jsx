import React from "react";
import PlayerControls from "../PlayerControls";
import TrackPlayInfo from "../TrackPlayInfo";
import * as S from './styles'

function BarPlayer() {
    return (
        <S.BarPlayer>
            <PlayerControls />
            <TrackPlayInfo />
        </S.BarPlayer>
    )
}

export default BarPlayer