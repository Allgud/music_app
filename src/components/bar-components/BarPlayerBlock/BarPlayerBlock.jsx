import React from "react";
import BarPlayer from '../BarPlayer';
import PlayerVolumeBlock from "../PlayerVolumeBlock";
import * as S from './styles'

function BarPlayerBlock() {
    return (
        <S.BarPlayerBlock>
           <BarPlayer />
           <PlayerVolumeBlock />
        </S.BarPlayerBlock>
    )
}

export default BarPlayerBlock