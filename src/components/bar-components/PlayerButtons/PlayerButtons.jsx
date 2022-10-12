import React from "react";
import { HandySvg } from 'handy-svg'
import { useStatus } from '../../../hook/useStatus'
import { useTheme } from '../../../hook/useTheme'

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
    return (
        <S.NextBtn>
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
    return (
        <S.PrevBtn>
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
    const { onPlayClick } = useStatus()
    const { theme } = useTheme()
    return (
        <S.PlayBtn 
            onClick={onPlayClick} 
        >
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
    return (
        <S.RepeatBtn>
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
    return (
        <S.ShuffleBtn>
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
    const { onPauseClick } = useStatus()
    const { theme } = useTheme()
    return (
        <S.PlayBtn 
            onClick={onPauseClick}
        >
            <S.PlayBtnSvg theme={theme}>
                <HandySvg 
                    src={pauseSvg}
                    alt="pause"
                />
            </S.PlayBtnSvg>
        </S.PlayBtn> 
    )
}

