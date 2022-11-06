import React from "react";
import { useSelector } from "react-redux";
import BarPlayer from '../BarPlayer';
import PlayerVolumeBlock from "../PlayerVolumeBlock";
import AudioBox from '../AudioBox'
import * as S from './styles'

function BarPlayerBlock({trackRef}) {
    const { onRepeat, currentTrack } = useSelector(state => state.bar)
    
    return (
        <S.BarPlayerBlock>
            <BarPlayer />
            <PlayerVolumeBlock trackRef={trackRef}/>
            <AudioBox 
                src={currentTrack?.track_file}
                ref={trackRef}
                isRepeat={`${onRepeat}`}
            />
        </S.BarPlayerBlock>
    )
}

export default BarPlayerBlock