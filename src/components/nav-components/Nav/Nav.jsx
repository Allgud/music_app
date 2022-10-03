import React, { useState } from "react";
import Logo from '../Logo'
import Burger from "../Burger";
import NavMenu from '../NavMenu'

import * as S from './styles'

function Nav() {
    const [active, setActive] = useState(false)
    
    const handleMenuRender = () => {
        setActive(!active)
    }

    return (
        <S.Nav>
            <Logo />
            <Burger handleView={handleMenuRender}/>
            {active && <NavMenu />}
        </S.Nav>
    )
}

export default Nav