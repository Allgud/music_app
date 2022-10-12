import React from "react";
import SearchIcon from "../SearchIcon"
import SearchInput from '../SearchInput'
import { useTheme } from '../../../hook/useTheme'

import * as S from './styles' 

function CenterBlockSearch() {
    const { theme } = useTheme()

    return (
        <S.CenterBlockSearch theme={theme}>
            <SearchIcon />
            <SearchInput />
        </S.CenterBlockSearch>
    )
}

export default CenterBlockSearch