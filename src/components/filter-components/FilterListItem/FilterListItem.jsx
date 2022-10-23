import React from "react";
import * as S from './styles';
import { useTheme } from '../../../hook/useTheme'

function FilterListItem({title}) {
    const { theme } = useTheme()

    return (
        <S.FilterListItem theme={theme}>
            <input type="checkbox" id={title}/>
            <label htmlFor={title}>{title}</label>
        </S.FilterListItem>
    )
}

export default FilterListItem