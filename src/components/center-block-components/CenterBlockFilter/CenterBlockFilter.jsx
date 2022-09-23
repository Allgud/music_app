import React from 'react'
import FilterButtonsList from '../FilterButtonsList'

import * as S from './styles'

function CenterBlockFilter() {
    return (
        <S.CenterBlockFilter>
            <S.CenterBlockFilterTitle>Искать по:</S.CenterBlockFilterTitle>
            <FilterButtonsList />
        </S.CenterBlockFilter>
    )
}

export default CenterBlockFilter