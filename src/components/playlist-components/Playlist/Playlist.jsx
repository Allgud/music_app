import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTracks } from '../../../store/trackSlice'
import Track from "../Track";
import TrackSkeleton from "../TrackSkeleton";
import * as S from "./styles";
import { SKELETONS_COUNT } from '../../../constants/constants'

function PlayList() {
    const status = useSelector(state => state.tracks.status)
    const tracks = useSelector(state => state.tracks.tracks)
    const dispatch = useDispatch()
    const skeletons = Array(SKELETONS_COUNT).fill("", 0, SKELETONS_COUNT).map((_, i) => <TrackSkeleton key={i}/>)
   
    useEffect(() => {
        dispatch(getAllTracks())
    }, [])

    return (
        <S.PlayList>
            {
                status === 'loading'
                ? skeletons 
                : tracks.map(el => <Track key={el.id} track={el}/>) 
            }
        </S.PlayList> 
    )
}

export default PlayList