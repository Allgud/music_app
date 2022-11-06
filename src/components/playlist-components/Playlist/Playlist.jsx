import React from "react";
import { useSelector } from "react-redux";
import Track from "../Track";
import TrackSkeleton from "../TrackSkeleton";
import * as S from "./styles";
import { SKELETONS_COUNT } from '../../../constants/constants'

function PlayList() {
    const { status, tracks } = useSelector(state => state.tracks)
    const skeletons = Array(SKELETONS_COUNT).fill("", 0, SKELETONS_COUNT).map((_, i) => <TrackSkeleton key={i}/>)

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