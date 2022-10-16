import React from "react";
import * as S from './styles'
import { useTheme } from '../../../hook/useTheme'

function SearchInput({ inputValue, onInputChange }) {
    const { theme } = useTheme()

    return (
        <S.SearchInput
            onChange={evt => onInputChange(evt)}
            theme={theme} 
            type="search"
            placeholder="Поиск"
            name="search"
            value={inputValue}
        />
    )
}

export default SearchInput