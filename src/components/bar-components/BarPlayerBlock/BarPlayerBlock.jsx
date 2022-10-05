<<<<<<< HEAD
import React, { useRef } from "react";
import BarPlayer from '../BarPlayer';
import PlayerVolumeBlock from "../PlayerVolumeBlock";
import AudioBox from '../AudioBox'
import * as S from './styles'
import { StatusProvider } from '../../../hoc/StatusProvider'
import { HandlerContext } from '../../context/context'
import BarPlayerProgress from '../BarPlayerProgress'
import src from '../AudioBox/audio/track.mp3'

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
=======
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
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
    )
}

export default BarPlayerBlock