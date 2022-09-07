import React from "react";
import Logo from './Logo'
import Burger from "./Burger";
import NavMenu from './NavMenu'

function Nav() {
    return (
        <nav className="main__nav nav">
            <Logo />
            <Burger />
            <NavMenu />
        </nav>
    )
}

export default Nav