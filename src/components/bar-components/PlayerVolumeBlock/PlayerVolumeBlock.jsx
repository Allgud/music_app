import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { handleVolume } from "../../../store/barSlice";
import { VolumeImage } from "../PlayerButtons/PlayerButtons";
import { useTheme } from "../../../hook/useTheme";

import * as S from './styles'

function PlayerVolumeBlock({trackRef}) {
    const { theme } = useTheme()
    const { volume } = useSelector(state => state.bar)
    const dispatch = useDispatch()

    useEffect(() => {
        trackRef.current.volume = volume / 100
    }, [volume])

    return (
        <S.BarVolumeBlock>
            <S.VolumeContent>
                <VolumeImage />
                <S.VolumeProgress>
                    <S.VolumeProgressLine
                        type="range" 
                        name="range"
                        theme={theme}
                        value={volume}
                        onChange={evt => dispatch(handleVolume(evt))}
                    />
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.BarVolumeBlock>
    )
}

export default PlayerVolumeBlock