import React from "react";
import { HandySvg } from 'handy-svg'

import nextSvg from '../../../img/icon/next.svg'
import playSvg from '../../../img/icon/play.svg'
import prevSvg from '../../../img/icon/prev.svg'
import repeatSvg from '../../../img/icon/repeat.svg'
import shuffleSvg from '../../../img/icon/shuffle.svg'
import volumeSvg from '../../../img/icon/volume.svg'

import * as S from './styles'

export const NextBtn = () => (
    <S.NextBtn>
        <S.NextBtnSvg>
            <HandySvg 
                src={nextSvg}
                alt="next"
            />
        </S.NextBtnSvg>
    </S.NextBtn>
)

export const PrevBtn = () => (
    <S.PrevBtn>
        <S.PrevBtnSvg>
            <HandySvg 
                src={prevSvg}
                alt="prev"
            />
        </S.PrevBtnSvg>
    </S.PrevBtn>
)

export const PlayBtn = () => (
    <S.PlayBtn>
        <S.PlayBtnSvg>
            <HandySvg 
                src={playSvg}
                alt="play"
            />
        </S.PlayBtnSvg>
    </S.PlayBtn>
)

export const RepeatBtn = () => (
    <S.RepeatBtn>
        <S.RepeatBtnSvg>
            <HandySvg 
                src={repeatSvg}
                alt="repeat"
            />
        </S.RepeatBtnSvg>
    </S.RepeatBtn>
)

export const ShuffleBtn = () => (
    <S.ShuffleBtn>
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