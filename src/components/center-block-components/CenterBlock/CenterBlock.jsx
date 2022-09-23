import React from 'react'
import CenterBlockSearch from '../CenterBlockSearch'
import CenterBlockFilter from '../CenterBlockFilter'
import CenterBlockContent from '../CenterBlockContent'

import * as S from './styles'

function CenterBlock() {
    return (
        <S.CenterBlock>
            <CenterBlockSearch />
            <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
            <CenterBlockFilter />
            <CenterBlockContent />
        </S.CenterBlock>
    )
}

export default CenterBlock