import React from "react";
import * as S from './styles'

export function ImgSkeleton() {
    return (
        <S.ImgSceleton />
    )
}

export function TrackPlayLinkSkeleton() {
    return (
        <S.TrackPlayLinkSkeleton />
    )
}


// function TrackPlayInfoSceleton() {
//     return (
//         <div className="player__track-play track-play">
//             <div className="track-play__contain">
//                 <div className="track-play__image">
//                     <div className="track__img--skeleton"></div>
//                 </div>
//                 <div className="track-play__author">
//                     <div className="track-play__link--skeleton"></div>
//                 </div>
//                 <div className="track-play__album">
//                     <div className="track-play__link--skeleton"></div>
//                 </div>
//             </div>
//             <div className="track-play__like-dis">
//                 <div className="track-play__like _btn-icon">
//                     <LikeButton cls='track-play__like-svg' />
//                 </div>
//                 <div className="track-play__dislike _btn-icon">
//                     <DislikeButton cls='track-play__dislike-svg' />
//                 </div>
//             </div>
//         </div>
//     )
// }