import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTracks } from '../../../hook/useTracks'
import Track from "../Track";
import TrackSkeleton from "../TrackSkeleton";
import * as S from "./styles";
import { SKELETONS_COUNT } from '../../../constants/constants'

function PlayList() {
    const { currentTracks } = useTracks()
    const [tracks, setTracks] = useState(currentTracks)
    const status = useSelector(state => state.tracks.status)
    
    const skeletons = Array(SKELETONS_COUNT).fill("", 0, SKELETONS_COUNT).map((_, i) => <TrackSkeleton key={i}/>)
   
    useEffect(() => {
        setTracks(currentTracks)
    },[currentTracks])

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