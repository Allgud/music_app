import React from "react";
import FilterList from "../FilterList";
import * as S from "./styles";

function FilterButton({ content, selector, handleClick, active}) {
    
    return (
        <>
            <S.FilterButton 
                $active={active}
                onClick={event => handleClick(event.target.textContent)}
            >
                {content}
            </S.FilterButton> 
            {active && <FilterList filter={selector}/> }
        </>
    )
}

export default FilterButton