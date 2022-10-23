import React from "react";
import { useTheme } from "../../../hook/useTheme";
import { useTracks } from '../../../hook/useTracks'

import * as S from './styles'

const PageTitle = ({title}) => {
    const { theme } = useTheme()
    const { resetFilters } = useTracks()

    return (
        <S.PageTitle theme={theme} onClick={resetFilters}>{title}</S.PageTitle>
    )
}

export default PageTitle