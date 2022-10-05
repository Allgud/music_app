import React from "react";
import * as S from './styles';

function FilterListItem({item}) {
    return (
        <S.FilterListItem>
            {item}
        </S.FilterListItem>
    )
}

export default FilterListItem