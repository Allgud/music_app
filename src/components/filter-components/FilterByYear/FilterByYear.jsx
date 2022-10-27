import React from "react";
import { useTheme } from '../../../hook/useTheme'
import FilterByYearItem from "../FilterByYearItem";
import { FILTERS_BY_YEAR } from "../../../constants/constants";
import * as S from "./styles";

function FilterByYear({ onClickTitle }) {
    const { theme } = useTheme()

    return (
        <S.FilterByYear theme={theme}>
            <S.FilterByYearItems>
                {FILTERS_BY_YEAR.map(btn => <FilterByYearItem key={btn} value={btn} onClickTitle={onClickTitle}/>)}
            </S.FilterByYearItems>
        </S.FilterByYear>  
    )
}

export default FilterByYear