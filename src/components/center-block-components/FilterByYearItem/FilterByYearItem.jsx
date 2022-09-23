import React from "react";
import * as S from "./styles";

function FilterByYearItem({value}) {
    return (
        <S.FilterByYearItem>
            <input type="radio" name="year" value={value} id={value}/>
            <label htmlFor={value}>{value}</label>
        </S.FilterByYearItem>
    )
}

export default FilterByYearItem

