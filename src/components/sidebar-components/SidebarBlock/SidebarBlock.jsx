import React, { useContext } from "react";
import { LoadingContext } from '../../context/context'
import SidebarButton from "../SidebarButton";
import SidebarButtonSkeleton from "../SidebarButtonSkeleton";

import img1 from '../../../img/playlist01.png'
import img2 from '../../../img/playlist02.png'
import img3 from '../../../img/playlist03.png'

import * as S from './styles'

const list = [ img1, img2, img3 ]

function SidebarBlock() {
    const loading = useContext(LoadingContext)

    const sidebarSkeletons = Array(list.length).fill('', 0, 3).map((_,i) => (<SidebarButtonSkeleton key={i}/>))
    const listButtons = list.map((elem, i) => (<SidebarButton key={i + 1} img={elem} />))

    return (
        <S.SidebarBlock>
            <S.SidebarList>
                {loading ? sidebarSkeletons : listButtons}
            </S.SidebarList>
        </S.SidebarBlock>
    )
}

export default SidebarBlock