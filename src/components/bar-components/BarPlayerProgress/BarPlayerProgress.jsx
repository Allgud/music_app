import React, { useEffect, useState } from "react";
import { useStatus } from '../../../hook/useStatus'

import * as S from './styles'

const BarPlayerProgress = ({audio}) => {
    const duration = Math.round(audio?.current?.duration)
    const [currentTime, setCurrentTime] = useState(0)
    const { isPlaying } = useStatus()

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
    }, [isPlaying])

    return (
        <>
            <S.BarPlayerProgress />
            <S.FilledBarPlayerProgress $width={`${currentTime}%`}/>
        </>
    )
}

export default BarPlayerProgress