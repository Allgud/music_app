import React from "react";
import { useLocation } from "react-router-dom";

import CenterBlockSearch from '../CenterBlockSearch'
import CenterBlockContent from '../CenterBlockContent'
import PageTitle from '../PageTitle'

import * as S from './styles'
import { PAGES_TITLES } from "../../../constants/constants";

const CenterBlock = ({children}) => {
    const location = useLocation()

    return (
        <S.CenterBlock>
            <CenterBlockSearch />
            <PageTitle title={PAGES_TITLES[location.pathname]}/>
            <CenterBlockContent>
                {children}
            </CenterBlockContent>
        </S.CenterBlock>
    )
}
export default CenterBlock