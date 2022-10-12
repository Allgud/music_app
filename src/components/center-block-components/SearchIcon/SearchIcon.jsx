import React from 'react'
import { HandySvg } from 'handy-svg'
import { useTheme } from '../../../hook/useTheme' 
import icon from '../../../img/icon/search.svg'
import * as S from './styles'

function SearchIcon() {
    const { theme } = useTheme()

    return (
        <S.SearchIconSvg theme={theme}>
            <HandySvg
                src={icon}
            /> 
        </S.SearchIconSvg>
    )
}

export default SearchIcon