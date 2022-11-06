import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { sortByFilter, resetFilters } from '../../../store/trackSlice'
import FilterByYear from "../FilterByYear";
import FilterListItem from '../FilterListItem'
import { useTheme } from '../../../hook/useTheme'
import * as S from "./styles"

function FilterList({selector}) {
    const activeFilter = selector.split('-')[1] 
    const { filters } = useSelector(state => state.tracks)
    const { theme } = useTheme()
    const [ pickedFilters, setPikedFilters ] = useState([])
    const dispatch = useDispatch()

    const pickFilters = (text) => {
      if(activeFilter === 'year'){
        setPikedFilters(text.split())
        return
      }
      setPikedFilters(prev => [...prev, text])
    }

    useEffect(() => {
      dispatch(sortByFilter({pickedFilters, activeFilter}));
    }, [pickedFilters])

    useEffect(() => {
      dispatch(resetFilters())
    }, [activeFilter])

    return (
      <>
          {
              activeFilter === 'year' 
              ? <FilterByYear onClickTitle={pickFilters}/> 
              : <S.FilterList
                  theme={theme}
                  $activeSelector={activeFilter}
                >
                  {filters[activeFilter].map(el => <FilterListItem key={el} title={el} onClickTitle={pickFilters}/>)}
              </S.FilterList>
          }
      </>
    ) 
}

export default FilterList