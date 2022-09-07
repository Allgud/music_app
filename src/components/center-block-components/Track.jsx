import React from "react";
import LikeButton from "../common-components/LikeButton";
import NoteIcon from "../common-components/NoteIcon";

function Track({ track }) {
    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <NoteIcon cls='track__title-svg' />
                    </div>
                    <div className="track__title-text">
                        <a href="#" className="track__title-link">
                            {track.title}
                            <span className="track__title-span">
                                {track.advInfo}
                            </span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a href="#" className="track__author-link">{track.author}</a>
                </div>
                <div className="track__album">
                    <a href="#" className="track__album-link">{track.album}</a>
                </div>
                <div className="track__time">
                    <LikeButton cls='track__time-svg'/>
                    <span className="track__time-text">{track.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Track