import React from "react";
import PlayList from "../PlayList";
import PlayListTitle from "../PlayListTitle";
import * as S from './styles'

function CenterBlockContent() {
    return (
        <S.CenterBlockContent>
            <PlayListTitle />
            <PlayList />
        </S.CenterBlockContent>
    )
}

export default CenterBlockContent