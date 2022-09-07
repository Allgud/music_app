import React from "react";
import BarPlayerBlock from "./bar-components/BarPlayerBlock";

function Bar() {
    return (
        <div className="bar">
            <div className="bar__content">
                <div className="bar__player-progress"></div>
                <BarPlayerBlock />
            </div>
        </div>
    )
}

export default Bar