import React from "react";
import { HandySvg } from 'handy-svg'

import nextSvg from '../../img/icon/next.svg'
import playSvg from '../../img/icon/play.svg'
import prevSvg from '../../img/icon/prev.svg'
import repeatSvg from '../../img/icon/repeat.svg'
import shuffleSvg from '../../img/icon/shuffle.svg'
import volumeSvg from '../../img/icon/volume.svg'

export const NextBtn = () => (
    <div className="player__btn-next">
        <HandySvg 
            src={nextSvg}
            className="player__btn-next-svg"
            alt="next"
        />
    </div>
)

export const PrevBtn = () => (
    <div className="player__btn-prev">
        <HandySvg 
            src={prevSvg}
            className="player__btn-prev-svg"
            alt="prev"
        />
    </div>
)

export const PlayBtn = () => (
    <div className="player__btn-play _btn">
        <HandySvg 
            src={playSvg}
            className="player__btn-play-svg"
            alt="play"
        />
    </div>
)

export const RepeatBtn = () => (
    <div className="player__btn-repeat _btn-icon">
        <HandySvg 
            src={repeatSvg}
            className="player__btn-repeat-svg"
            alt="repeat"
        />
    </div>
)

export const ShuffleBtn = () => (
    <div className="player__btn-shuffle _btn-icon">
        <HandySvg 
            src={shuffleSvg}
            className="player__btn-shuffle-svg"
            alt="shuffle"
        />
    </div>
)

export const VolumeImage = () => (
    <div className="volume__image">
        <HandySvg 
            src={volumeSvg}
            className='volume__svg'
            alt='volume'
        />
    </div>
)