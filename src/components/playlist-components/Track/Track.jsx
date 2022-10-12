import React from "react";
import NoteIcon from '../../common-components/NoteIcon'
import * as S from './styles'
import LikeButton from "../../common-components/LikeButton";
import { useTheme } from '../../../hook/useTheme'
import { convertDuration } from '../../../constants/constants'

function Track({ track }) {
    const { theme } = useTheme()
    const { name, author, album, duration_in_seconds: time } = track

    return (
        <S.PlayListItem>
            <S.PlayListTrack>
                <S.TrackTitle>
                    <S.TrackTitleImage theme={theme}>
                        <S.TrackTitleImageSvg>
                            <NoteIcon />
                        </S.TrackTitleImageSvg> 
                    </S.TrackTitleImage>
                    <S.TrackTitleText>
                        <S.TrackTitleLink>
                            {name}
                            <S.TrackTitleSpan>
                                {track.advInfo}
                            </S.TrackTitleSpan>
                        </S.TrackTitleLink>
                    </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                    <S.TrackAuthorLink>{author}</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                    <S.TrackAlbumLink>{album}</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                    <S.TrackTimeSvg>
                        <LikeButton />
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>{convertDuration(time)}</S.TrackTimeText>
                </S.TrackTime>
            </S.PlayListTrack>
        </S.PlayListItem>
    )
}

export default Track