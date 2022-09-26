import React from "react";

import * as S from './styles'

function NavMenuItem({ link, title }) {
    
    return (
        <S.NavMenuItem>
            <S.NavMenuItemLink to={link} >{title}</S.NavMenuItemLink>
        </S.NavMenuItem>
    )
}

export default NavMenuItem