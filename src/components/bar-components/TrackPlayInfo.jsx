import React from "react";
import NoteIcon from '../common-components/NoteIcon'
import LikeButton from '../common-components/LikeButton'
import DislikeButton from "../common-components/DislikeButton";

function TrackPlayInfo() {
    return (
        <div className="player__track-play track-play">
            <div className="track-play__contain">
                <div className="track-play__image">
                    <NoteIcon cls="track-play__svg" />
                </div>
                <div className="track-play__author">
                    <a href="#" className="track-play__author-link">Ты та...</a>
                </div>
                <div className="track-play__album">
                    <a href="#" className="track-play__album-link">Баста</a>
                </div>
            </div>
            <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                    <LikeButton cls='track-play__like-svg' />
                </div>
                <div className="track-play__dislike _btn-icon">
                    <DislikeButton cls='track-play__dislike-svg' />
                </div>
            </div>
        </div>
    )
}

export default TrackPlayInfo