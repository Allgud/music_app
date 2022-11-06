import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTrack } from "../../../store/barSlice";
import NoteIcon from '../../common-components/NoteIcon'
import LikeButton from "../../common-components/LikeButton";
import { useTheme } from '../../../hook/useTheme'
import { convertDuration } from '../../../constants/constants'
import * as S from './styles'

function Track({ track }) {
    const { theme } = useTheme()
    const [liked, setLiked] = useState(false)
    const username = useSelector(state => state.user.username)
    const { id, name, author, album, duration_in_seconds: time, stared_user : stared } = track
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(stared.find(el => el.username === username)){
            setLiked(true)
        }
    }, [])

    return (
        <S.PlayListItem onClick={() => dispatch(getCurrentTrack(id))}>
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
                    <S.TrackTimeSvg $liked={liked}>
                        <LikeButton />
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>{convertDuration(time)}</S.TrackTimeText>
                </S.TrackTime>
            </S.PlayListTrack>
        </S.PlayListItem>
    )
}

export default Track