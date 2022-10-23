import React from "react";
import { useTheme } from "../../../hook/useTheme"
import * as S from "./styles";

function FilterByYearItem({value, pickFilters}) {
    const { theme } = useTheme()

    return (
        <S.FilterByYearItem theme={theme}>
            <input type="radio" name="year" value={value} id={value}/>
            <label htmlFor={value} onClick={() => pickFilters(value)}>{value}</label>
        </S.FilterByYearItem>
    )
}

export default FilterByYearItem

