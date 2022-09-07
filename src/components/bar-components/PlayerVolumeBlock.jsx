import React from "react";
import { VolumeImage } from "./PlayerButtons";

function PlayerVolumeBlock() {
    return (
        <div className="bar__volume-block volume">
            <div className="volume__content">
                <VolumeImage />
                <div className="volume__progress _btn">
                    <input className="volume__progress-line _btn" type="range" name="range" />
                </div>
            </div>
        </div>
    )
}

export default PlayerVolumeBlock