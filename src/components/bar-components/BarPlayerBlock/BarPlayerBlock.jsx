import React, {useContext} from "react";
import { useSelector } from "react-redux";
import BarPlayer from '../BarPlayer';
import PlayerVolumeBlock from "../PlayerVolumeBlock";
import AudioBox from '../AudioBox'
import { HandlerContext } from '../../context/context'
import { useStatus } from '../../../hook/useStatus'
import * as S from './styles'

function BarPlayerBlock() {
    const { trackRef } = useContext(HandlerContext)
    const currentTrack = useSelector(state => state.bar.currentTrack)
    const { onRepeat } = useStatus()

    return (
        <S.BarPlayerBlock>
            <BarPlayer />
            <PlayerVolumeBlock />
            <AudioBox 
                src={currentTrack?.track_file}
                ref={trackRef}
                isRepeat={onRepeat}
            />
        </S.BarPlayerBlock>
    )
}

export default BarPlayerBlock