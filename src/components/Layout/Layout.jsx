import React from 'react'
<<<<<<< HEAD
import { Outlet } from 'react-router-dom'

import CenterBlock from '../center-block-components/CenterBlock'
import Nav from '../nav-components/Nav'
import Sidebar from '../sidebar-components/Sidebar'
import BarPlayerBlock from '../bar-components/BarPlayerBlock'
import Footer from '../Footer'

import * as S from './styles'

const Layout = () => (
    <S.Wrapper>
        <S.Container>
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
=======
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
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5

export default Layout