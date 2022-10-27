import React from "react";
import { useTheme } from "../../../hook/useTheme";

import * as S from './styles'

const PageTitle = ({title}) => {
    const { theme } = useTheme()

    return (
        <S.PageTitle theme={theme}>{title}</S.PageTitle>
    )
}

export default PageTitle