import React from "react";
import BarPlayer from "./BarPlayer";
import PlayerVolumeBlock from "./PlayerVolumeBlock";

function BarPlayerBlock() {
    return (
        <div className="bar__player-block">
           <BarPlayer />
           <PlayerVolumeBlock />
        </div>
    )
}

export default BarPlayerBlock