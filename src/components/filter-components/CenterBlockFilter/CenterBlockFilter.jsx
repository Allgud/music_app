import React from 'react'
import FilterButtonsList from '../FilterButtonsList'
import { useTheme } from '../../../hook/useTheme'

import * as S from './styles'

function CenterBlockFilter() {
    const { theme } = useTheme()

    return (
        <S.CenterBlockFilter>
            <S.CenterBlockFilterTitle theme={theme}>Искать по:</S.CenterBlockFilterTitle>
            <FilterButtonsList />
        </S.CenterBlockFilter>
    )
}

export default CenterBlockFilter