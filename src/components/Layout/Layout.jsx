import React from 'react'
import * as S from './styles'

function Layout({children}) {
    return (
        <S.Wrapper>
            <S.Container>
                {children}
            </S.Container>
        </S.Wrapper>
    )
}

export default Layout