import React, { useContext } from "react";
import { VolumeImage } from "../PlayerButtons/PlayerButtons";
import { HandlerContext } from "../../context/context";
import { useTheme } from "../../../hook/useTheme";

import * as S from './styles'

function PlayerVolumeBlock() {
    const { theme } = useTheme()
    const { volume, handleVolume } = useContext(HandlerContext)

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
                        onChange={evt => handleVolume(evt)}
                    />
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.BarVolumeBlock>
    )
}

export default PlayerVolumeBlock