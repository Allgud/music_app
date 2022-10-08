import React, { useState } from "react";
import Logo from '../Logo'
import Burger from "../Burger";
import NavMenu from '../NavMenu'

import * as S from './styles'
import { useTheme } from "../../../hook/useTheme";

function Nav() {
    const [active, setActive] = useState(false)
    const { theme } = useTheme()
    const handleMenuRender = () => {
        setActive(!active)
    }
    console.log(theme);
    return (
        <S.Nav theme={theme}>
            <Logo />
            <Burger handleView={handleMenuRender}/>
            {active && <NavMenu />}
        </S.Nav>
    )
}

export default Nav