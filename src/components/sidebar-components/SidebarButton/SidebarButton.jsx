import React from "react";
import * as S from './styles'

function SidebarButton({ img }) {
    return (
        <S.SidebarItem>
            <S.SidebarLink>
                <S.SidebarImg src={img} alt="day's playlist" />
            </S.SidebarLink>
        </S.SidebarItem>
    )
}

export default SidebarButton 