import React, { useRef } from "react";
import { StatusProvider } from '../../../hoc/StatusProvider'
import { useTheme } from '../../../hook/useTheme'
import { HandlerContext } from "../../context/context";
import BarPlayerProgress from "../BarPlayerProgress";
import BarPlayerBlock from "../BarPlayerBlock";
import * as S from './styles'

const Bar = () => {
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

    return (
        <StatusProvider>
            <S.Bar theme={theme}>
                <S.BarContent>
                    <BarPlayerProgress audio={trackRef}/>
                    <HandlerContext.Provider value={{trackRef, handlePlayPauseClick}}>
                        <BarPlayerBlock />
                    </HandlerContext.Provider>
                </S.BarContent>
            </S.Bar>
        </StatusProvider>
    )
}

export default Bar