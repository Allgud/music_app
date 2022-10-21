import React from "react";
import NoteIcon from '../../common-components/NoteIcon'
import LikeButton from '../../common-components/LikeButton'

import * as S from './styles'
import DislikeButton from "../../common-components/DislikeButton";
import { useTheme } from '../../../hook/useTheme'
import  { useHandleBar } from '../../../hook/useHandleBar'

function TrackPlayInfo() {
    const { theme } = useTheme()
    const { currentTrack } = useHandleBar()
    
    return (
        <S.PlayerTrackPlay>
            <S.TrackPlayContain>
                <S.TrackPlayImage theme={theme}>
                    <S.TrackPlayImageSvg>
                        <NoteIcon />
                    </S.TrackPlayImageSvg>  
                </S.TrackPlayImage>
                <S.TrackPlayAuthor >
                    <S.TrackPlayAuthorLink theme={theme} href="#" >{currentTrack.name}</S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                     <S.TrackPlayAlbumLink theme={theme} href="#" >{currentTrack.author}</S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
            </S.TrackPlayContain>
            <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                    <S.TrackPlayLikeSvg>
                        <LikeButton />
                    </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                    <S.TrackPlayDislikeSvg>
                        <DislikeButton />
                    </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>             
            </S.TrackPlayLikeDis>
        </S.PlayerTrackPlay>
    )
}

export default TrackPlayInfo