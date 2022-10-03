import React from 'react'
import { HandySvg } from 'handy-svg'
import icon from '../../../img/icon/search.svg'
import * as S from './styles'

function SearchIcon() {
    return (
        <S.SearchIconSvg>
            <HandySvg
                src={icon}
            /> 
        </S.SearchIconSvg>
    )
}

export default SearchIcon