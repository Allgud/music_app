import React from "react";
import PlayerControls from "./PlayerControls";
import TrackPlayInfo from "./TrackPlayInfo";

function BarPlayer() {
    return (
        <div className="bar__player player">
            <PlayerControls />
            <TrackPlayInfo />
        </div>
    )
}

export default BarPlayer