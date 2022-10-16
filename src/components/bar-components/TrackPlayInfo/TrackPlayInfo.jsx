import React from "react";
import NoteIcon from '../../common-components/NoteIcon'
import LikeButton from '../../common-components/LikeButton'
import {ImgSkeleton, TrackPlayLinkSkeleton} from '../TrackPlayInfoSkeleton/TrackPlayInfoSkeletons'

import * as S from './styles'
import DislikeButton from "../../common-components/DislikeButton";
import { useTheme } from '../../../hook/useTheme'
import { useService } from '../../../hook/useService'
import  { useHandleBar } from '../../../hook/useHandleBar'

function TrackPlayInfo() {
    const { isLoading } = useService()
    const { theme } = useTheme()
    const { currentTrack } = useHandleBar()
    
    return (
        <S.PlayerTrackPlay>
            <S.TrackPlayContain>
                <S.TrackPlayImage theme={theme}>
                    {
                        isLoading
                        ? <ImgSkeleton />
                        : <S.TrackPlayImageSvg>
                            <NoteIcon />
                          </S.TrackPlayImageSvg>  
                    }
                </S.TrackPlayImage>
                <S.TrackPlayAuthor >
                    {
                        isLoading
                        ? <TrackPlayLinkSkeleton />
                        : <S.TrackPlayAuthorLink theme={theme} href="#" >{currentTrack.name}</S.TrackPlayAuthorLink>
                    }
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                    {
                        isLoading
                        ? <TrackPlayLinkSkeleton />
                        : <S.TrackPlayAlbumLink theme={theme} href="#" >{currentTrack.author}</S.TrackPlayAlbumLink>
                    } 
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