import React from "react";
import {HandySvg} from 'handy-svg'
import watchSvg from '../../../img/icon/watch.svg'

import * as S from './styles'

function PlayListTitle() {
    return (
        <S.PlayListTitle>
            <S.PlayListTitleCol1>Трек</S.PlayListTitleCol1>
            <S.PlayListTitleCol2>ИСПОЛНИТЕЛЬ</S.PlayListTitleCol2>
            <S.PlayListTitleCol3>АЛЬБОМ</S.PlayListTitleCol3>
            <S.PlayListTitleCol4>
                <S.PlayListTitleSvg>
                    <HandySvg
                        src={watchSvg}
                    />
                </S.PlayListTitleSvg>
            </S.PlayListTitleCol4>
        </S.PlayListTitle>
    )
}

export default PlayListTitle