import React from "react";
import FilterByYearItem from "../FilterByYearItem";
import * as S from "./styles";

function FilterByYear({buttons, theme}) {

    return (
        <S.FilterByYear theme={theme}>
            <S.FilterByYearItems>
                {buttons.map((btn, i) => <FilterByYearItem theme={theme} key={i} value={btn}/>)}
            </S.FilterByYearItems>
        </S.FilterByYear>  
    )
}

export default FilterByYear