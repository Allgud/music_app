import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTheme } from '../../hook/useTheme'
import CenterBlock from '../center-block-components/CenterBlock'
import Nav from '../nav-components/Nav'
import Sidebar from '../sidebar-components/Sidebar'
import Bar from '../bar-components/Bar'
import * as S from './styles'

const Layout = () => {
    const { theme } = useTheme()
    const isVisible = useSelector(state => state.bar.isVisible)

    return (
        <S.Wrapper theme={theme}>
            <S.Container theme={theme}>
                <Nav />
                <CenterBlock>
                    <Outlet />
                </CenterBlock>
                <Sidebar />
                {isVisible && <Bar />}
            </S.Container>
        </S.Wrapper>
    )
}


export default Layout