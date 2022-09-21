import React from "react";
import SearchIcon from "../SearchIcon"
import SearchInput from '../SearchInput'

import * as S from './styles' 

function CenterBlockSearch() {
    return (
        <S.CenterBlockSearch>
            <SearchIcon />
            <SearchInput />
        </S.CenterBlockSearch>
    )
}

export default CenterBlockSearch