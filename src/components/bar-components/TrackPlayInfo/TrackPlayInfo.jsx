import React, { useState, useEffect } from "react";
import NoteIcon from '../../common-components/NoteIcon'
import LikeButton from '../../common-components/LikeButton'
import DislikeButton from "../../common-components/DislikeButton";
import { useDispatch, useSelector } from "react-redux";
import { likeTrack, dislikeTrack } from '../../../store/barSlice'
import { ImgSkeleton, TrackPlayLinkSkeleton } from "../TrackPlayInfoSkeleton/TrackPlayInfoSkeletons";
import { useTheme } from '../../../hook/useTheme'
import * as S from './styles'

function TrackPlayInfo() {
    const { theme } = useTheme()
    const { currentTrack, status } = useSelector(state => state.bar)
    const username = useSelector(state => state.user.username)
    const [ liked, setLiked ] = useState(false)
    const stared_user = currentTrack?.stared_user
    const dispatch = useDispatch()

    const onLikeClick = (id) => {
        setLiked(prev => !prev)
        dispatch(likeTrack(id))
    }

    const onDislikeClick = (id) => {
        setLiked(prev => !prev)
        dispatch(dislikeTrack(id))
    } 

    useEffect(() => {
        if(stared_user?.find(el => el.username === username)) {
            setLiked(true)
        }
    },[currentTrack])
    
    return (
        <S.PlayerTrackPlay>
            <S.TrackPlayContain>
                <S.TrackPlayImage theme={theme}>
                    <S.TrackPlayImageSvg>
                        {status === 'loading' ? <ImgSkeleton /> : <NoteIcon />} 
                    </S.TrackPlayImageSvg>  
                </S.TrackPlayImage>
                <S.TrackPlayAuthor >
                    <S.TrackPlayAuthorLink theme={theme} href="#" >
                        {status === 'loading' ? <TrackPlayLinkSkeleton/> : currentTrack.name}
                    </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                    { status == 'loading' 
                      ? <TrackPlayLinkSkeleton/> 
                      : <S.TrackPlayAlbumLink theme={theme} href="#" >{currentTrack.author}</S.TrackPlayAlbumLink>
                    }    
                </S.TrackPlayAlbum>
            </S.TrackPlayContain>
            <S.TrackPlayLikeDis>
                <S.TrackPlayLike onClick={() => onLikeClick(currentTrack.id)}>
                    <S.TrackPlayLikeSvg $liked={liked} >
                        <LikeButton />
                    </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike onClick={() => onDislikeClick(currentTrack.id)}>
                    <S.TrackPlayDislikeSvg>
                        <DislikeButton />
                    </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>             
            </S.TrackPlayLikeDis>
        </S.PlayerTrackPlay>
    )
}

export default TrackPlayInfo