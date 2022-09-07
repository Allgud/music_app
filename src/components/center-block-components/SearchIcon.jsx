import React from 'react'
import { HandySvg } from 'handy-svg'
import icon from '../../img/icon/search.svg'

function SearchIcon() {
    return (
        <HandySvg 
            src={icon}
            className='search__svg'
        />
    )
}

export default SearchIcon