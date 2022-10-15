import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../hook/useTheme'
import { useHandleBar } from '../../hook/useHandleBar'
import CenterBlock from '../center-block-components/CenterBlock'
import Nav from '../nav-components/Nav'
import Sidebar from '../sidebar-components/Sidebar'
import Bar from '../bar-components/Bar'

import * as S from './styles'


const Layout = () => {
    const { theme } = useTheme()
    const { showBar } = useHandleBar()

    return (
        <S.Wrapper theme={theme}>
            <S.Container theme={theme}>
                <Nav />
                <CenterBlock>
                    <Outlet />
                </CenterBlock>
                <Sidebar />
                {showBar && <Bar />}
            </S.Container>
        </S.Wrapper>
    )
}


export default Layout