import React, { useState, useRef } from "react";
import { StatusProvider } from '../../../providers/StatusProvider'
import { useTheme } from '../../../hook/useTheme'
import { HandlerContext } from "../../context/context";
import BarPlayerProgress from "../BarPlayerProgress";
import BarPlayerBlock from "../BarPlayerBlock";
import * as S from './styles'

const Bar = () => {
    const [ volume, setVolume ] = useState(50)
    const { theme } = useTheme()
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

    const handleVolume = ({target}) => {
        setVolume(target.value)
        trackRef.current.volume = volume / 100
    }

    return (
        <StatusProvider>
            <S.Bar theme={theme}>
                <S.BarContent>
                    <BarPlayerProgress audio={trackRef}/>
                    <HandlerContext.Provider value={{trackRef, handlePlayPauseClick, volume, handleVolume}}>
                        <BarPlayerBlock />
                    </HandlerContext.Provider>
                </S.BarContent>
            </S.Bar>
        </StatusProvider>
    )
}

export default Bar