import React, { useEffect, useState } from "react";
import FilterByYear from "../FilterByYear";
import FilterListItem from '../FilterListItem'
import { useTheme } from '../../../hook/useTheme'
import { FILTERS } from "../../../constants/constants";
import * as S from "./styles";

function FilterList({ filter }) {
   const [ state, setState ] = useState([])
   const [activeSelector, setActiveSelector] = useState('')
   const { theme } = useTheme()
   
   const handleFilters = string => { 
     const keys = Object.keys(FILTERS)
     const chooseFilter = keys.filter(el => string.split('-').includes(el))
     const activeFilter = chooseFilter[0]
     setActiveSelector(activeFilter) 
     setState(FILTERS[activeFilter])
   }

   useEffect(() => {
    handleFilters(filter)
   }, [state])

   return (
    <>
        {
            activeSelector === 'year' 
            ? <FilterByYear buttons={state}/> 
            : <S.FilterList
                theme={theme}
                $activeSelector={activeSelector}
              >
                {state.map(el => <FilterListItem key={el.id} title={el.title} />)}
            </S.FilterList>
        }
    </>
   ) 
}

export default FilterList