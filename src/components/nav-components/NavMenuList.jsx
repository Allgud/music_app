import React from "react";
import NavMenuItem from "./NavMenuItem";

function NavMenuList({ list }) {
    const menuItems = list.map((item, i) => (<NavMenuItem key={i + 1} obj={item} />))
    console.log(menuItems);
    return (
        <ul className="menu__list">
            {menuItems}
        </ul>
    )
}

export default NavMenuList