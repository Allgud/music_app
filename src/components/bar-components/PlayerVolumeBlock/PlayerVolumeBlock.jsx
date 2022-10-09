import React from "react";
import { VolumeImage } from "../PlayerButtons/PlayerButtons";
import { useTheme } from "../../../hook/useTheme";

import * as S from './styles'

function PlayerVolumeBlock() {
    const { theme } = useTheme()

    return (
        <S.BarVolumeBlock>
            <S.VolumeContent>
                <VolumeImage />
                <S.VolumeProgress>
                    <S.VolumeProgressLine
                        type="range" 
                        name="range"
                        theme={theme} 
                    />
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.BarVolumeBlock>
    )
}

export default PlayerVolumeBlock