import React from "react";
import * as T from '../Track/styles'
import * as S from './styles'

function TrackSkeleton() {
    return (
        <T.PlayListItem>
            <T.PlayListTrack>
                <T.TrackTitle>
                    <T.TrackTitleImage>
                        <S.TrackImgSkeleton />
                    </T.TrackTitleImage>
                    <T.TrackTitleText>
                        <S.TrackTitleTextSkeleton />
                    </T.TrackTitleText>
                </T.TrackTitle>
                <T.TrackAuthor>
                    <S.TrackAuthorSkeleton />
                </T.TrackAuthor>
                <T.TrackAlbum>
                    <S.TrackAlbumSkeleton />
                </T.TrackAlbum>
            </T.PlayListTrack>
        </T.PlayListItem>
    )
}

export default TrackSkeleton