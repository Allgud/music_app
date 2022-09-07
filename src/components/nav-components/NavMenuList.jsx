import React from "react";
import NavMenuItem from "./NavMenuItem";

const links = [
    {link: "", title: "Главное"}, 
    {link: "", title: "Мой плейлист"}, 
    {link: "", title: "Выйти"}
]

function NavMenuList() {
  
    return (
        <ul className="menu__list">
            {
              links.map((item, i) => (<NavMenuItem key={i} link={item.link} title={item.title} />)) 
            }
        </ul>
    )
}

export default NavMenuList