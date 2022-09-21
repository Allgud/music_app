import React from "react";
import { HandySvg } from 'handy-svg'
import likeSvg from '../../img/icon/like.svg'

function LikeButton({cls}) {
    return (
        <HandySvg
            src={likeSvg}
            className={cls}
            alt='like'
        />
    )
}

export default LikeButton