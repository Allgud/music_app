import React from "react";
import * as S from './styles';

function FilterListItem({item, theme}) {
    return (
        <S.FilterListItem theme={theme}>
            {item}
        </S.FilterListItem>
    )
}

export default FilterListItem