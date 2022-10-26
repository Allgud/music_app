import React from "react";
import NavMenuItem from "../NavMenuItem";
import { NAV_LINKS } from '../../../constants/constants'

import * as S from './styles'

function NavMenuList() {
  
    return (
        <S.NavMenuList>
            {
              NAV_LINKS .map((item, i) => (<NavMenuItem key={i} link={item.link} title={item.title} />)) 
            }
        </S.NavMenuList>
    )
}

export default NavMenuList