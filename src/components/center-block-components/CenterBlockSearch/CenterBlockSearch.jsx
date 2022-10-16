import React, { useState } from "react";
import SearchIcon from "../SearchIcon"
import SearchInput from '../SearchInput'
import { useTheme } from '../../../hook/useTheme'

import * as S from './styles' 

function CenterBlockSearch() {
    const [ searchValue, setSearchValue ] = useState('')
    const { theme } = useTheme()

    const onInputChange = (evt) => {
        setSearchValue(evt.target.value)
    }

    return (
        <S.CenterBlockSearch theme={theme}>
            <SearchIcon />
            <SearchInput 
                inputValue={searchValue}
                onInputChange={onInputChange} 
            />
        </S.CenterBlockSearch>
    )
}

export default CenterBlockSearch