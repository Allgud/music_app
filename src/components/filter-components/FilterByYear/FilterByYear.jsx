import React from "react";
import { useTheme } from '../../../hook/useTheme'
import FilterByYearItem from "../FilterByYearItem";
import * as S from "./styles";

function FilterByYear({buttons}) {
    const { theme } = useTheme()

    return (
        <S.FilterByYear theme={theme}>
            <S.FilterByYearItems>
                {buttons.map(btn => <FilterByYearItem key={btn} value={btn} />)}
            </S.FilterByYearItems>
        </S.FilterByYear>  
    )
}

export default FilterByYear