import React from "react";
import { HandySvg } from 'handy-svg'
<<<<<<< HEAD
import { useStatus } from '../../../hook/useStatus'

import nextSvg from '../../../img/icon/next.svg'
import playSvg from '../../../img/icon/play.svg'
import pauseSvg from '../../../img/icon/pause.svg'
=======

import nextSvg from '../../../img/icon/next.svg'
import playSvg from '../../../img/icon/play.svg'
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
import prevSvg from '../../../img/icon/prev.svg'
import repeatSvg from '../../../img/icon/repeat.svg'
import shuffleSvg from '../../../img/icon/shuffle.svg'
import volumeSvg from '../../../img/icon/volume.svg'

import * as S from './styles'

export const NextBtn = () => (
<<<<<<< HEAD
    <S.NextBtn
        data-btn="next"
    >
=======
    <S.NextBtn>
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
        <S.NextBtnSvg>
            <HandySvg 
                src={nextSvg}
                alt="next"
            />
        </S.NextBtnSvg>
    </S.NextBtn>
)

export const PrevBtn = () => (
<<<<<<< HEAD
    <S.PrevBtn
        data-btn="prev"
    >
=======
    <S.PrevBtn>
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
        <S.PrevBtnSvg>
            <HandySvg 
                src={prevSvg}
                alt="prev"
            />
        </S.PrevBtnSvg>
    </S.PrevBtn>
)

<<<<<<< HEAD
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
=======
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
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
        <S.RepeatBtnSvg>
            <HandySvg 
                src={repeatSvg}
                alt="repeat"
            />
        </S.RepeatBtnSvg>
    </S.RepeatBtn>
)

export const ShuffleBtn = () => (
<<<<<<< HEAD
    <S.ShuffleBtn
        data-btn="shuffle"
    >
=======
    <S.ShuffleBtn>
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
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
<<<<<<< HEAD
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
=======
)
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
