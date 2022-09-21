import React from "react";
import { VolumeImage } from "../PlayerButtons/PlayerButtons";

import * as S from './styles'

function PlayerVolumeBlock() {
    return (
        <S.BarVolumeBlock>
            <S.VolumeContent>
                <VolumeImage />
                <S.VolumeProgress>
                    <S.VolumeProgressLine
                        type="range" 
                        name="range" 
                    />
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.BarVolumeBlock>
    )
}

export default PlayerVolumeBlock