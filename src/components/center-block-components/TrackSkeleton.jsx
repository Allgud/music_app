import React from "react";

function TrackSceleton() {
    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <div className="track__img--skeleton"></div>
                    </div>
                    <div className="track__title-text">
                        <div className="track__title-text--skeleton"></div>
                    </div>
                </div>
                <div className="track__author">
                    <div className="track__author--skeleton"></div>
                </div>
                <div className="track__album">
                    <div className="track__album--skeleton"></div>
                </div>
            </div>
        </div>
    )
}

export default TrackSceleton