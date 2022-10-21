import React from "react";
import { useSelector } from "react-redux";
import { useTracks } from '../../../hook/useTracks'
import Track from "../Track";
import TrackSkeleton from "../TrackSkeleton";
import * as S from "./styles";
import { SKELETONS_COUNT } from '../../../constants/constants'

function PlayList() {
    const status = useSelector(state => state.tracks.status)
    const { currentTracks } = useTracks()

    const skeletons = Array(SKELETONS_COUNT).fill("", 0, 10).map((_, i) => <TrackSkeleton key={i}/>)
   
    return (
        <S.PlayList>
            {
                status === 'loading'
                ? skeletons 
                : currentTracks.map(el => <Track key={el.id} track={el}/>) 
            }
        </S.PlayList>
        
    )
}

export default PlayList