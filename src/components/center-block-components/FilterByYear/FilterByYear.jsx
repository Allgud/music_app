import React from "react";
import FilterByYearItem from "../FilterByYearItem";
import * as S from "./styles";

function FilterByYear({buttons}) {

    return (
        <S.FilterByYear>
            <S.FilterByYearItems>
                {buttons.map((btn, i) => <FilterByYearItem key={i} value={btn}/>)}
            </S.FilterByYearItems>
        </S.FilterByYear>  
    )
}

export default FilterByYear