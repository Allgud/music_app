import React from "react";
import NoteIcon from '../../common-components/NoteIcon'
import LikeButton from '../../common-components/LikeButton'
import {ImgSkeleton, TrackPlayLinkSkeleton} from '../TrackPlayInfoSkeleton/TrackPlayInfoSkeletons'

import stylesSvg from './TrackPlayInfo.module.scss'
import * as S from './styles'
import DislikeButton from "../../common-components/DislikeButton";
import Context from "../../context/context";
import { useContext } from "react";


function TrackPlayInfo() {
    const loading = useContext(Context) 

    return (
        <S.PlayerTrackPlay>
            <S.TrackPlayContain>
                <S.TrackPlayImage>
                    {
                        loading
                        ? <ImgSkeleton />
                        : <NoteIcon cls={stylesSvg['track-play__svg']}/>
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
                    <LikeButton cls={stylesSvg['track-play__like-svg']}/>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                    <DislikeButton cls={stylesSvg['track-play__dislike-svg']}/>
                </S.TrackPlayDislike>             
            </S.TrackPlayLikeDis>
        </S.PlayerTrackPlay>
    )
}

export default TrackPlayInfo