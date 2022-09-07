import React from "react";
import {HandySvg} from 'handy-svg'

import dislikeSvg from '../../img/icon/dislike.svg'

function DislikeButton({cls}) {
    return (
        <HandySvg 
            src={dislikeSvg}
            className={cls}
            alt='dislike'
        />
    )
}

export default DislikeButton