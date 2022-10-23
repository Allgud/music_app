import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import FilterByYear from "../FilterByYear";
import FilterListItem from '../FilterListItem'
import { useTheme } from '../../../hook/useTheme'
import { FILTERS } from "../../../constants/constants";
import * as S from "./styles"

function FilterList({ filter }) {
   const tracks = useSelector(state => state.tracks.tracks) 
   const [ state, setState ] = useState([])
   const [activeSelector, setActiveSelector] = useState('')
  
   const { theme } = useTheme()

   const createFilterList = (filter) => {
    if(filter === 'year') {
      setState(FILTERS[filter])
      return
    }

    const filterList = new Set(tracks.map(el => el[filter]))
    setState(Array.from(filterList))
   }
  
   const handleFilters = string => { 
     createFilterList(string.split('-')[1])
     setActiveSelector(string.split('-')[1]) 
   }

   useEffect(() => {
    handleFilters(filter)
   }, [])
   
   return (
    <>
        {
            activeSelector === 'year' 
            ? <FilterByYear buttons={state}/> 
            : <S.FilterList
                theme={theme}
                $activeSelector={activeSelector}
              >
                {state.map(el => <FilterListItem key={el} title={el} />)}
            </S.FilterList>
        }
    </>
   ) 
}

export default FilterList