import React, {useContext} from "react";
import BarPlayer from '../BarPlayer';
import PlayerVolumeBlock from "../PlayerVolumeBlock";
import AudioBox from '../AudioBox'
import * as S from './styles'
import { HandlerContext } from '../../context/context'
import { useHandleBar } from '../../../hook/useHandleBar'

function BarPlayerBlock() {
    const { trackRef } = useContext(HandlerContext)
    const { currentTrack } = useHandleBar()

    return (
        <S.BarPlayerBlock>
            <BarPlayer />
            <PlayerVolumeBlock />
            <AudioBox 
                src={currentTrack.track_file}
                ref={trackRef}
            />
        </S.BarPlayerBlock>
    )
}

export default BarPlayerBlock