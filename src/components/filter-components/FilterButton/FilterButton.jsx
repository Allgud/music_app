import React from "react";
import FilterList from "../FilterList";
import { useTheme } from '../../../hook/useTheme'
import * as S from "./styles";

function FilterButton({ content, selector, handleClick, active}) {
    const { theme } = useTheme()

    return (
        <>
            <S.FilterButton
                theme={theme} 
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