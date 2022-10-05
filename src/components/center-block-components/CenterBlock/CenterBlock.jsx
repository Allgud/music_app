<<<<<<< HEAD
import React from "react";
import { useLocation } from "react-router-dom";

import CenterBlockSearch from '../CenterBlockSearch'
import PageTitle from '../PageTitle'

import * as S from './styles'
import { PAGES_TITLES } from "../../../constants/constants";

const CenterBlock = ({children}) => {
    const location = useLocation()

    return (<S.CenterBlock>
        <CenterBlockSearch />
        <PageTitle title={PAGES_TITLES[location.pathname]}/>
        <S.CenterBlockContent>
            {children}
        </S.CenterBlockContent>
    </S.CenterBlock>)
=======
import React from 'react'
import CenterBlockSearch from '../CenterBlockSearch'
import CenterBlockFilter from '../CenterBlockFilter'
import CenterBlockContent from '../CenterBlockContent'

import * as S from './styles'

function CenterBlock() {
    return (
        <S.CenterBlock>
            <CenterBlockSearch />
            <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
            <CenterBlockFilter />
            <CenterBlockContent />
        </S.CenterBlock>
    )
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
}

export default CenterBlock