import React from "react";
import SidebarBlock from "../SidebarBlock";
import SidebarPersonal from "../SidebarPersonal";
import * as S from './styles'

function Sidebar() {
    return (
        <S.Sidebar>
            <SidebarPersonal />
            <SidebarBlock />
        </S.Sidebar>
    )
}

export default Sidebar