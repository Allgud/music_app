import React from "react";
import { HandySvg } from 'handy-svg'
import likeSvg from '../../img/icon/like.svg'

function LikeButton() {
    return (
        <HandySvg
            src={likeSvg}
            alt='like'
        />
    )
}

export default LikeButton