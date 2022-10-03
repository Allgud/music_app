import React from "react";
import { HandySvg } from 'handy-svg'
import { useStatus } from '../../../hook/useStatus'

import nextSvg from '../../../img/icon/next.svg'
import playSvg from '../../../img/icon/play.svg'
import pauseSvg from '../../../img/icon/pause.svg'
import prevSvg from '../../../img/icon/prev.svg'
import repeatSvg from '../../../img/icon/repeat.svg'
import shuffleSvg from '../../../img/icon/shuffle.svg'
import volumeSvg from '../../../img/icon/volume.svg'

import * as S from './styles'

export const NextBtn = () => (
    <S.NextBtn
        data-btn="next"
    >
        <S.NextBtnSvg>
            <HandySvg 
                src={nextSvg}
                alt="next"
            />
        </S.NextBtnSvg>
    </S.NextBtn>
)

export const PrevBtn = () => (
    <S.PrevBtn
        data-btn="prev"
    >
        <S.PrevBtnSvg>
            <HandySvg 
                src={prevSvg}
                alt="prev"
            />
        </S.PrevBtnSvg>
    </S.PrevBtn>
)

export const PlayBtn = () => {
    const { onPlayClick } = useStatus()

    return (
        <S.PlayBtn 
            onClick={onPlayClick}
            data-btn="play" 
        >
            <S.PlayBtnSvg>
                <HandySvg 
                    src={playSvg}
                    alt="play"
                />
            </S.PlayBtnSvg>
        </S.PlayBtn>
    )
}


export const RepeatBtn = () => (
    <S.RepeatBtn
        data-btn="repeat"
    >
        <S.RepeatBtnSvg>
            <HandySvg 
                src={repeatSvg}
                alt="repeat"
            />
        </S.RepeatBtnSvg>
    </S.RepeatBtn>
)

export const ShuffleBtn = () => (
    <S.ShuffleBtn
        data-btn="shuffle"
    >
        <S.ShuffleBtnSvg>
            <HandySvg 
                src={shuffleSvg}
                alt="shuffle"
            />
        </S.ShuffleBtnSvg>
    </S.ShuffleBtn>
)

export const VolumeImage = () => (
    <S.VolumeImage>
        <S.VolumeImageSvg>
            <HandySvg 
                src={volumeSvg}
                alt='volume'
            />
        </S.VolumeImageSvg>
    </S.VolumeImage>
)

export const PauseBtn = () => {
    const { onPauseClick } = useStatus()

    return (
        <S.PlayBtn 
            onClick={onPauseClick}
            data-btn="pause"
        >
            <S.PlayBtnSvg>
                <HandySvg 
                    src={pauseSvg}
                    alt="pause"
                />
            </S.PlayBtnSvg>
        </S.PlayBtn> 
    )
}