import React, {useContext} from "react";
import { LoadingContext } from '../../context/context'
import Track from "../Track";
import TrackSkeleton from "../TrackSkeleton";
import * as S from "./styles";

import { TRACKS }from '../../../constants/constants'

function PlayList() {
    const loading = useContext(LoadingContext)

    const skeletons = Array(TRACKS.length).fill("", 0, 10).map((_, i) => <TrackSkeleton key={i}/>)
    const trackList = TRACKS.map(elem => (<Track key={elem.id} track={elem} />))
   
    return (
        <S.PlayList>
            {loading ? skeletons : trackList }
        </S.PlayList>
    )
}

export default PlayList