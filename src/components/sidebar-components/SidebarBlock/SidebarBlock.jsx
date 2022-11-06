import React from 'react'
import { useSelector } from 'react-redux';
import SidebarButton from "../SidebarButton";
import SidebarButtonSkeleton from "../SidebarButtonSkeleton";

import img1 from '../../../img/playlist01.png'
import img2 from '../../../img/playlist02.png'
import img3 from '../../../img/playlist03.png'

import * as S from './styles'

const list = [ img1, img2, img3 ]

function SidebarBlock() {
    const status = useSelector(state => state.tracks.status)
    const sidebarSkeletons = Array(list.length).fill('', 0, 3).map((_,i) => (<SidebarButtonSkeleton key={i}/>))

    return (
        <S.SidebarBlock>
            <S.SidebarList>
                {
                    status === 'loading' 
                    ? sidebarSkeletons 
                    : list.map((elem, i) => (<SidebarButton key={i + 1} img={elem} />))}
            </S.SidebarList>
        </S.SidebarBlock>
    )
}

export default SidebarBlock