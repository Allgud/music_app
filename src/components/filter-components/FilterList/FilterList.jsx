import React, { useEffect, useState } from "react";
import FilterByYear from "../FilterByYear";
import FilterListItem from '../FilterListItem'
import * as S from "./styles";

const filters = {
    author: ['Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Evanescense', 'Jay-Z', 'Clouns'],
    genre: ['Rock', 'Hip-Hop', 'Pop', 'Techno', 'Indi', 'R & B'],
    year: ['Более новые', 'Более старые']
}

function FilterList({ filter }) {
   const [ state, setState ] = useState([])
   const [activeSelector, setActiveSelector] = useState('')
   
   const handleFilters = string => { 
     const keys = Object.keys(filters)
     const chooseFilter = keys.filter(el => string.split('-').includes(el))
     const activeFilter = chooseFilter[0]
     setActiveSelector(activeFilter) 
     setState(filters[activeFilter])
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
                $activeSelector={activeSelector}
              >
                {state.map((el, i) => <FilterListItem key={i} item={el} />)}
            </S.FilterList>
        }
    </>
   ) 
}

export default FilterList