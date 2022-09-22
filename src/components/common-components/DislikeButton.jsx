import React from "react";
import {HandySvg} from 'handy-svg'

import dislikeSvg from '../../img/icon/dislike.svg'

function DislikeButton() {
    return (
        <HandySvg 
            src={dislikeSvg}
            alt='dislike'
        />
    )
}

export default DislikeButton