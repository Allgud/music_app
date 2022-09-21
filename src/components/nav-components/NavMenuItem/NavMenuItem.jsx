import React from "react";

import * as S from './styles'

function NavMenuItem({ link, title }) {
    
    return (
        <S.NavMenuItem>
            <S.NavMenuItemLink href={link} >{title}</S.NavMenuItemLink>
        </S.NavMenuItem>
    )
}

export default NavMenuItem