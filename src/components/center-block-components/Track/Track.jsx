import React from "react";
// import LikeButton from "../../common-components/LikeButton";
import NoteIcon from '../../common-components/NoteIcon'
import stylesSvg from './Track.module.scss'
import * as S from './styles'
import LikeButton from "../../common-components/LikeButton";

function Track({ track }) {

    return (
        <S.PlayListItem>
            <S.PlayListTrack>
                <S.TrackTitle>
                    <S.TrackTitleImage>
                        <NoteIcon cls={stylesSvg['track__title-svg']}/>
                    </S.TrackTitleImage>
                    <S.TrackTitleText>
                        <S.TrackTitleLink>
                            {track.title}
                            <S.TrackTitleSpan>
                                {track.advInfo}
                            </S.TrackTitleSpan>
                        </S.TrackTitleLink>
                    </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                    <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                    <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                    <LikeButton cls={stylesSvg['track__time-svg']}/>
                    <S.TrackTimeText>{track.time}</S.TrackTimeText>
                </S.TrackTime>
            </S.PlayListTrack>
        </S.PlayListItem>
    )
}

export default Track