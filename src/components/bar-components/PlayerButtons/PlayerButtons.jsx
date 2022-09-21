import React from "react";
import { HandySvg } from 'handy-svg'

import nextSvg from '../../../img/icon/next.svg'
import playSvg from '../../../img/icon/play.svg'
import prevSvg from '../../../img/icon/prev.svg'
import repeatSvg from '../../../img/icon/repeat.svg'
import shuffleSvg from '../../../img/icon/shuffle.svg'
import volumeSvg from '../../../img/icon/volume.svg'

import style from './PlayerButtons.module.scss'

import * as S from './styles'

export const NextBtn = () => (
    <S.NextBtn>
        <HandySvg 
            src={nextSvg}
            className={style['player__btn-next-svg']}
            alt="next"
        />
    </S.NextBtn>
)

export const PrevBtn = () => (
    <S.PrevBtn>
        <HandySvg 
            src={prevSvg}
            className={style['player__btn-prev-svg']}
            alt="prev"
        />
    </S.PrevBtn>
)

export const PlayBtn = () => (
    <S.PlayBtn>
        <HandySvg 
            src={playSvg}
            className={style["player__btn-play-svg"]}
            alt="play"
        />
    </S.PlayBtn>
)

export const RepeatBtn = () => (
    <S.RepeatBtn>
        <HandySvg 
            src={repeatSvg}
            className={style["player__btn-repeat-svg"]}
            alt="repeat"
        />
    </S.RepeatBtn>
)

export const ShuffleBtn = () => (
    <S.ShuffleBtn>
        <HandySvg 
            src={shuffleSvg}
            className={style["player__btn-shuffle-svg"]}
            alt="shuffle"
        />
    </S.ShuffleBtn>
)

export const VolumeImage = () => (
    <S.VolumeImage>
        <HandySvg 
            src={volumeSvg}
            className={style['volume__svg']}
            alt='volume'
        />
    </S.VolumeImage>
)