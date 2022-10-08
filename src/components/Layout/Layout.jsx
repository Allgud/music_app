import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../hook/useTheme'
import CenterBlock from '../center-block-components/CenterBlock'
import Nav from '../nav-components/Nav'
import Sidebar from '../sidebar-components/Sidebar'
import BarPlayerBlock from '../bar-components/BarPlayerBlock'
import Footer from '../Footer'

import * as S from './styles'


const Layout = () => {
    const { theme } = useTheme()

    return (
        <S.Wrapper theme={theme}>
            <S.Container theme={theme}>
                <Nav />
                <CenterBlock>
                    <Outlet />
                </CenterBlock>
                <Sidebar />
                <BarPlayerBlock />
                <Footer />
            </S.Container>
        </S.Wrapper>
    )
}


export default Layout