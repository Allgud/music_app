import React from 'react'
import { HandySvg } from 'handy-svg'
import icon from '../../../img/icon/search.svg'
import style from './SearchIcon.module.scss'

function SearchIcon() {
    return (
        <HandySvg
            src={icon}
            className={style.search__svg}
        /> 
    )
}

export default SearchIcon