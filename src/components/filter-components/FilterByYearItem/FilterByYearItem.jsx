import React from "react";
import * as S from "./styles";

function FilterByYearItem({value, theme}) {
    return (
        <S.FilterByYearItem theme={theme}>
            <input type="radio" name="year" value={value} id={value}/>
            <label htmlFor={value}>{value}</label>
        </S.FilterByYearItem>
    )
}

export default FilterByYearItem

