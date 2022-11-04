import React from "react";
import { useSelector } from "react-redux";
import BarPlayer from '../BarPlayer';
import PlayerVolumeBlock from "../PlayerVolumeBlock";
import AudioBox from '../AudioBox'
import * as S from './styles'
import track from '../BarPlayerBlock/papa_roach - dead_cell.mp3'

function BarPlayerBlock({trackRef}) {
    const { onRepeat } = useSelector(state => state.bar)
    
    return (
        <S.BarPlayerBlock>
            <BarPlayer />
            <PlayerVolumeBlock trackRef={trackRef}/>
            <AudioBox 
                // src={currentTrack?.track_file}
                src={track}
                ref={trackRef}
                isRepeat={`${onRepeat}`}
            />
        </S.BarPlayerBlock>
    )
}

export default BarPlayerBlock