import React from "react";
import NavMenuItem from "./NavMenuItem";

function NavMenuList({ list }) {
    const menuItems = list.map((item, i) => {
        return <NavMenuItem key={i + 1} obj={item} />
    })

    return (
        <ul className="menu__list">
            {menuItems}
        </ul>
    )
}

export default NavMenuList