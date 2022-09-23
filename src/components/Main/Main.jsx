import React from 'react'
import CenterBlock from '../center-block-components/CenterBlock'
import Nav from '../nav-components/Nav'
import Sidebar from '../sidebar-components/Sidebar'
import * as S from './styles'

function Main() {
    return (
        <S.Main>
            <Nav />
            <CenterBlock />
            <Sidebar /> 
        </S.Main>  
    )
}

export default Main