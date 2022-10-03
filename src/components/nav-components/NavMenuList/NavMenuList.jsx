import React from "react";
import NavMenuItem from "../NavMenuItem";

import * as S from './styles'

const links = [
    {link: "/tracks", title: "Главное"}, 
    {link: "/my-playlist", title: "Мой плейлист"}, 
    {link: "/", title: "Выйти"}
]

function NavMenuList() {
  
    return (
        <S.NavMenuList>
            {
              links.map((item, i) => (<NavMenuItem key={i} link={item.link} title={item.title} />)) 
            }
        </S.NavMenuList>
    )
}

export default NavMenuList