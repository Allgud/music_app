import React, { useState } from "react";
import Logo from './Logo'
import Burger from "./Burger";
import NavMenu from './NavMenu'

function Nav() {
    const [active, setActive] = useState(false)
    
    const handleMenuRender = () => {
        setActive(!active)
    }

    return (
        <nav className="main__nav nav">
            <Logo />
            <Burger handleView={handleMenuRender}/>
            {active && <NavMenu />}
        </nav>
    )
}

export default Nav