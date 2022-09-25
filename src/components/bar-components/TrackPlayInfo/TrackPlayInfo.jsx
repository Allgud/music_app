import React from "react";
import NoteIcon from '../../common-components/NoteIcon'
import LikeButton from '../../common-components/LikeButton'
import {ImgSkeleton, TrackPlayLinkSkeleton} from '../TrackPlayInfoSkeleton/TrackPlayInfoSkeletons'

import * as S from './styles'
import DislikeButton from "../../common-components/DislikeButton";
import { LoadingContext } from "../../context/context";
import { useContext } from "react";


function TrackPlayInfo() {
    const loading = useContext(LoadingContext) 

    return (
        <S.PlayerTrackPlay>
            <S.TrackPlayContain>
                <S.TrackPlayImage>
                    {
                        loading
                        ? <ImgSkeleton />
                        : <S.TrackPlayImageSvg>
                            <NoteIcon />
                          </S.TrackPlayImageSvg>  
                    }
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                    {
                        loading
                        ? <TrackPlayLinkSkeleton />
                        : <S.TrackPlayAuthorLink href="#">Ты та...</S.TrackPlayAuthorLink>
                    }
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                    {
                        loading
                        ? <TrackPlayLinkSkeleton />
                        : <S.TrackPlayAlbumLink href="#">Баста</S.TrackPlayAlbumLink>
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