import React, { useContext } from "react";
import Context from '../context/context'
import PlayerControls from "./PlayerControls";
import TrackPlayInfo from "./TrackPlayInfo";
import TrackPlayInfoSceleton from "./TrackPlayInfoSkeleton";

function BarPlayer() {
    const loading = useContext(Context)

    return (
        <div className="bar__player player">
            <PlayerControls />
            {loading ? <TrackPlayInfoSceleton /> : <TrackPlayInfo />}
        </div>
    )
}

export default BarPlayer