import React from "react";
import {PrevBtn, PlayBtn, NextBtn, RepeatBtn, ShuffleBtn} from './PlayerButtons'

function PlayerControls() {
    return (
        <div className="player__controls">
            <PrevBtn />
            <PlayBtn />
            <NextBtn />
            <RepeatBtn />
            <ShuffleBtn />
        </div>
    )
}

export default PlayerControls