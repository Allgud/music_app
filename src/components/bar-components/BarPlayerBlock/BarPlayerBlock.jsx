import React, {useContext} from "react";
import BarPlayer from '../BarPlayer';
import PlayerVolumeBlock from "../PlayerVolumeBlock";
import AudioBox from '../AudioBox'
import * as S from './styles'
import { HandlerContext } from '../../context/context'
import src from '../AudioBox/audio/Papa Roach - Dead Cell.mp3'

function BarPlayerBlock() {
    const { trackRef } = useContext(HandlerContext)

    return (
        <S.BarPlayerBlock>
            <BarPlayer />
            <PlayerVolumeBlock />
            <AudioBox 
                src={src}
                ref={trackRef}
            />
        </S.BarPlayerBlock>
    )
}

export default BarPlayerBlock