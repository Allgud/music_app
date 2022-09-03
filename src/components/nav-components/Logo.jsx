import React from "react";
import img from '../../img/logo.png'

export const NavLogo = () => {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src={img} alt="logo"></img>
        </div>
    )
}

