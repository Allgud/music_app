import React from "react";
import NavMenuList from "./NavMenuList";

const links = [
    {link: "", title: "Главное"}, 
    {link: "", title: "Мой плейлист"}, 
    {link: "", title: "Выйти"}
]

function NavMenu() {
    return (
        <div className="nav__menu menu">
            <NavMenuList list={links}/>
        </div>
    )
}

export default NavMenu