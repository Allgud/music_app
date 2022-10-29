import React, { useState, useRef } from "react";
import { useSelector } from 'react-redux'
import { StatusProvider } from '../../../providers/StatusProvider'
import { useTheme } from '../../../hook/useTheme'
import { HandlerContext } from "../../context/context";
import BarPlayerProgress from "../BarPlayerProgress";
import BarPlayerBlock from "../BarPlayerBlock";
import * as S from './styles'
import { useEffect } from "react";

const Bar = () => {
    const isPlaing = useSelector(state => state.bar.isPlaing)
    const [ volume, setVolume ] = useState(50)
    const { theme } = useTheme()
    const trackRef = useRef()

    const handleVolume = ({target}) => {
        setVolume(target.value)
        trackRef.current.volume = volume / 100
    }

    useEffect(() => {
        if(isPlaing) {
            trackRef.current.play()
            return 
        }
        if(!isPlaing) {
            trackRef.current.pause()
            return
        }
    })

    return (
        <StatusProvider>
            <S.Bar theme={theme}>
                <S.BarContent>
                    <BarPlayerProgress audio={trackRef}/>
                    <HandlerContext.Provider value={{trackRef, volume, handleVolume}}>
                        <BarPlayerBlock />
                    </HandlerContext.Provider>
                </S.BarContent>
            </S.Bar>
        </StatusProvider>
    )
}

export default Bar