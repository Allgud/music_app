import React from "react";

function NavMenuItem(obj) {
    return (
        <li className="menu__item">
            <a href={obj.link} className="menu__link">{obj.title}</a>
        </li>
    )
}

export default NavMenuItem