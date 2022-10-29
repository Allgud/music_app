import React from "react";
import PlayList from "../../playlist-components/Playlist";
import PlayListTitle from "../../playlist-components/PlayListTitle";
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