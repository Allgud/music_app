import React, { useState, useEffect } from "react";
import Track from "../Track";
import TrackSkeleton from "../TrackSkeleton";
import * as S from "./styles";
import { useService } from '../../../hook/useService'
import { SKELETONS_COUNT } from '../../../constants/constants'

function PlayList() {
    const { musicService, isLoading, toggleLoading } = useService()
    const [ trackList, setTrackList ] = useState([])

    useEffect(() => {
        toggleLoading(true)
        musicService.getAllTracks().then(data => {
            setTrackList(data.results)
            toggleLoading(false)
        })
    }, [])

    const skeletons = Array(SKELETONS_COUNT).fill("", 0, 10).map((_, i) => <TrackSkeleton key={i}/>)
   
    return (
        <S.PlayList>
            {
                isLoading 
                ? skeletons 
                : trackList.map(el => <Track key={el.id} track={el}/>) 
            }
        </S.PlayList>
    )
}

export default PlayList