import React from "react";
import * as S from './styles'
import { useTheme } from '../../../hook/useTheme'

function SearchInput() {
    const { theme } = useTheme()

    return (
        <S.SearchInput
            theme={theme} 
            type="search"
            placeholder="Поиск"
            name="search"
        />
    )
}

export default SearchInput