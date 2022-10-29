import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchTracks } from '../../../store/trackSlice'
import SearchIcon from "../SearchIcon"
import SearchInput from '../SearchInput'
import { useTheme } from '../../../hook/useTheme'
import * as S from './styles' 

function CenterBlockSearch() {
    const [searchValue, setSearchValue] = useState('')
    const { theme } = useTheme()
    const dispatch = useDispatch()

    const onInputChange = (evt) => {
        setSearchValue(evt.target.value)
    }

    useEffect(() => {
        dispatch(searchTracks(searchValue))
    }, [searchValue])

    return (
        <S.CenterBlockSearch theme={theme}>
            <SearchIcon />
            <SearchInput 
                onInputChange={onInputChange}
                searchValue={searchValue} 
            />
        </S.CenterBlockSearch>
    )
}

export default CenterBlockSearch