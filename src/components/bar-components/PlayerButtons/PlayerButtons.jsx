import React from "react";
import { HandySvg } from 'handy-svg'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '../../../hook/useTheme'
import { shuffleTracks } from "../../../store/trackSlice";
import { getNextTrack, getPrevTrack } from '../../../store/barSlice'

import { useStatus } from '../../../hook/useStatus'
import { togglePlayPause } from "../../../store/barSlice";

import nextSvg from '../../../img/icon/next.svg'
import playSvg from '../../../img/icon/play.svg'
import pauseSvg from '../../../img/icon/pause.svg'
import prevSvg from '../../../img/icon/prev.svg'
import repeatSvg from '../../../img/icon/repeat.svg'
import shuffleSvg from '../../../img/icon/shuffle.svg'
import volumeSvg from '../../../img/icon/volume.svg'

import * as S from './styles'

export const NextBtn = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    const currentTrack = useSelector(state => state.bar.currentTrack)
    return (
        <S.NextBtn onClick={() => dispatch(getNextTrack(currentTrack.id))}>
            <S.NextBtnSvg theme={theme}>
                <HandySvg 
                    src={nextSvg}
                    alt="next"
                />
            </S.NextBtnSvg>
        </S.NextBtn>
    )
}

export const PrevBtn = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    const currentTrack = useSelector(state => state.bar.currentTrack)
    return (
        <S.PrevBtn onClick={() => dispatch(getPrevTrack(currentTrack.id))}>
            <S.PrevBtnSvg theme={theme}>
                <HandySvg 
                    src={prevSvg}
                    alt="prev"
                />
            </S.PrevBtnSvg>
        </S.PrevBtn>
    )
}

export const PlayBtn = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    return (
        <S.PlayBtn onClick={() => dispatch(togglePlayPause())}>
            <S.PlayBtnSvg theme={theme}>
                <HandySvg 
                    src={playSvg}
                    alt="play"
                />
            </S.PlayBtnSvg>
        </S.PlayBtn>
    )
}

export const RepeatBtn = () => {
    const { theme } = useTheme()
    const { onRepeatClick } = useStatus()
    return (
        <S.RepeatBtn onClick = {() => onRepeatClick()}>
            <S.RepeatBtnSvg theme={theme}>
                <HandySvg 
                    src={repeatSvg}
                    alt="repeat"
                />
            </S.RepeatBtnSvg>
        </S.RepeatBtn>
    )
}

export const ShuffleBtn = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    
    return (
        <S.ShuffleBtn onClick={() => dispatch(shuffleTracks())}>
            <S.ShuffleBtnSvg theme={theme}>
                <HandySvg 
                    src={shuffleSvg}
                    alt="shuffle"
                />
            </S.ShuffleBtnSvg>
        </S.ShuffleBtn>
    )
}

export const VolumeImage = () => {
    const { theme } = useTheme()
    return (
        <S.VolumeImage>
            <S.VolumeImageSvg theme={theme}>
                <HandySvg 
                    src={volumeSvg}
                    alt='volume'
                />
            </S.VolumeImageSvg>
        </S.VolumeImage>
    )
}

export const PauseBtn = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    return (
        <S.PlayBtn onClick={() => dispatch(togglePlayPause())}>
            <S.PlayBtnSvg theme={theme}>
                <HandySvg 
                    src={pauseSvg}
                    alt="pause"
                />
            </S.PlayBtnSvg>
        </S.PlayBtn> 
    )
}

