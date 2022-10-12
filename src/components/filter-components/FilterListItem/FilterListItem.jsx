import React from "react";
import * as S from './styles';
import { useTheme } from '../../../hook/useTheme'

function FilterListItem({title}) {
    const { theme } = useTheme()

    return (
        <S.FilterListItem theme={theme}>
            {title}
        </S.FilterListItem>
    )
}

export default FilterListItem