import React from "react";
// import CenterBlockFilter from '../../filter-components/CenterBlockFilter'
// import PlayList from "../../playlist-components/Playlist";
// import PlayListTitle from "../../playlist-components/PlayListTitle";
import * as S from './styles'

function CenterBlockContent({children}) {
    return (
        <S.CenterBlockContent>
            {children}
        </S.CenterBlockContent>
    )
}

export default CenterBlockContent