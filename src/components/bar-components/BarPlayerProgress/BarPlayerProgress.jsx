import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from '../../../hook/useTheme'

import * as S from './styles'

const BarPlayerProgress = ({audio}) => {
    const duration = Math.round(audio?.current?.duration)
    const [currentTime, setCurrentTime] = useState(0)
    const isPlaying = useSelector(state => state.bar.isPlaying)
    const { theme } = useTheme()

    useEffect(() => {
        if(currentTime === 100) {
            setCurrentTime(0)
        }
        const interval = setInterval(() => {
            if(!isPlaying) {
                clearInterval(interval)
                return
            }
            const value = Math.round(audio?.current?.currentTime) / duration * 100
            setCurrentTime(value)
        }, 1000)
        return () => clearInterval(interval)
    }, [isPlaying])

    return (
        <>
            <S.BarPlayerProgress theme={theme}/>
            <S.FilledBarPlayerProgress $width={`${currentTime}%`}/>
        </>
    )
}

export default BarPlayerProgress