import React from "react";

function NavMenuItem({ link, title }) {
    
    return (
        <li className="menu__item">
            <a href={link} className="menu__link">{title}</a>
        </li>
    )
}

export default NavMenuItem