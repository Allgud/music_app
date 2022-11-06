import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCollections } from '../../../store/collectionsSlice'; 
import SidebarButton from "../SidebarButton";
import SidebarButtonSkeleton from "../SidebarButtonSkeleton";

import img1 from '../../../img/playlist01.png'
import img2 from '../../../img/playlist02.png'
import img3 from '../../../img/playlist03.png'

import * as S from './styles'

const list = [ img1, img2, img3 ]

function SidebarBlock() {
    const { status } = useSelector(state => state.tracks)
    const sidebarSkeletons = Array(list.length).fill('', 0, 3).map((_,i) => (<SidebarButtonSkeleton key={i}/>))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCollections())
    }, [])

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