import React from "react";
import NoteIcon from '../../common-components/NoteIcon'
import LikeButton from "../../common-components/LikeButton";
import { useTheme } from "../../../hook/useTheme";
import * as S from './styles'


function Track({ track }) {
    const { theme } = useTheme()

    return (
        <S.PlayListItem>
            <S.PlayListTrack>
                <S.TrackTitle>
                    <S.TrackTitleImage>
                        <S.TrackTitleImageSvg>
                            <NoteIcon />
                        </S.TrackTitleImageSvg> 
                    </S.TrackTitleImage>
                    <S.TrackTitleText>
                        <S.TrackTitleLink theme={theme}>
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
                    <S.TrackTimeSvg>
                        <LikeButton />
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>{track.time}</S.TrackTimeText>
                </S.TrackTime>
            </S.PlayListTrack>
        </S.PlayListItem>
    )
}

export default Track