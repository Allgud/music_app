import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from '../../../hook/useTheme'
import { setSeekTime } from "../../../store/barSlice";

import * as S from './styles'

const BarPlayerProgress = ({trackRef}) => {
    const duration = Math.round(trackRef?.current?.duration)
    const { isPlaying } = useSelector(state => state.bar)
    const { theme } = useTheme()
    const [currentPosition, setCurrentPosition] = useState(0)
    const dispatch = useDispatch()

    const seekTime = (evt) => {
        const width = getComputedStyle(evt.target.parentNode).getPropertyValue('width')
        const position = evt.clientX / Number(width.substring(0, width.length - 2))
        const pos = Math.round(duration * position.toFixed(2)/ duration * 100)
        setCurrentPosition(pos)
        dispatch(setSeekTime(Math.round(duration * pos / 100)))
        return
    }

    useEffect(() => {
        if(currentPosition === 100) {
            setCurrentPosition(0)
        }
        const interval = setInterval(() => {
            if(!isPlaying) {
                clearInterval(interval)
                return
            }
            const value = Math.round(trackRef?.current?.currentTime) / duration * 100
            setCurrentPosition(value)
        }, 1000)
        return () => clearInterval(interval)
    }, [isPlaying])

    return (
        <S.BarPlayerProgressBox onClick={(evt) => seekTime(evt)}>
            <S.BarPlayerProgress theme={theme} />
            <S.FilledBarPlayerProgress $width={`${currentPosition}%`}/>
        </S.BarPlayerProgressBox>
    )
}

export default BarPlayerProgress