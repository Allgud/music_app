import React from "react";
import {HandySvg} from 'handy-svg'

import noteSvg from '../../img/icon/note.svg'

function NoteIcon({cls}) {
    return (
        <HandySvg 
            src={noteSvg}
            className={cls}
            alt='music'
        />
    )
}

export default NoteIcon