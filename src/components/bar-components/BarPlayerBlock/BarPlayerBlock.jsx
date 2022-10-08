import React, { useRef } from "react";
import BarPlayer from '../BarPlayer';
import PlayerVolumeBlock from "../PlayerVolumeBlock";
import AudioBox from '../AudioBox'
import * as S from './styles'
import { StatusProvider } from '../../../hoc/StatusProvider'
import { HandlerContext } from '../../context/context'
import BarPlayerProgress from '../BarPlayerProgress'
import src from '../AudioBox/audio/Papa Roach - Dead Cell.mp3'

function BarPlayerBlock() {
    const trackRef = useRef()

    const handlePlayPauseClick = (bool) => {
        if(bool) {
            trackRef.current.play()
            return
        }

        if(!bool) {
            trackRef?.current?.pause()
            return
        }
    }


    return (
        <StatusProvider>
            <S.BarContent>
                <BarPlayerProgress audio={trackRef}/>
                <S.BarPlayerBlock>
                    <HandlerContext.Provider value={handlePlayPauseClick}>
                        <BarPlayer />
                    </HandlerContext.Provider>
                    <PlayerVolumeBlock />
                    <AudioBox 
                        src={src}
                        ref={trackRef}
                    />
                </S.BarPlayerBlock>
            </S.BarContent>
        </StatusProvider>
    )
}

export default BarPlayerBlock