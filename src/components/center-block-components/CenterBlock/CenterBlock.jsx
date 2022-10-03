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
}

export default CenterBlock