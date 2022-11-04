import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux'
import { useTheme } from '../../../hook/useTheme'
import BarPlayerProgress from "../BarPlayerProgress";
import BarPlayerBlock from "../BarPlayerBlock";
import * as S from './styles'

const Bar = () => {
    const audio = useRef()
    const { isPlaying, seekTime } = useSelector(state => state.bar)
    const { theme } = useTheme()

    useEffect(() => {
        if (isPlaying) {
            audio.current.play()
            return
        }
        if (!isPlaying) {
            audio.current.pause()
        }
    }, [isPlaying])

    useEffect(() => {
        audio.current.currentTime = seekTime
    }, [seekTime])

    return (
        <S.Bar theme={theme}>
            <S.BarContent>
                <BarPlayerProgress trackRef={audio} />
                <BarPlayerBlock trackRef={audio} />
            </S.BarContent>
        </S.Bar>
    )
}

export default Bar