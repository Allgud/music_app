import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import FilterByYear from "../FilterByYear";
import FilterListItem from '../FilterListItem'
import { useTracks } from '../../../hook/useTracks'
import { useTheme } from '../../../hook/useTheme'
import { FILTERS_BY_YEAR } from "../../../constants/constants";
import * as S from "./styles"

function FilterList({ filter }) {
    const tracks = useSelector(state => state.tracks.tracks)
    const { getChoosenTracks } = useTracks() 
    const [ state, setState ] = useState([])
    const [ choosenFilters, setChoosenFilters ] = useState([])
    const [activeSelector, setActiveSelector] = useState('')
    const { theme } = useTheme()

    const pickFilters = (title) => {
      const pickedFilters = []
      pickedFilters.push(title)
      if(activeSelector === 'year') {
        setChoosenFilters(pickedFilters)
        return
      }
      setChoosenFilters(prev => prev.concat(pickedFilters))
    }

    const createFilterList = (filter) => {
      if(filter === 'year') {
        setState(FILTERS_BY_YEAR)
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
    
    useEffect(() => {
      getChoosenTracks(choosenFilters, activeSelector)
    }, [choosenFilters])

    return (
      <>
          {
              activeSelector === 'year' 
              ? <FilterByYear buttons={state} pickFilters={pickFilters}/> 
              : <S.FilterList
                  theme={theme}
                  $activeSelector={activeSelector}
                >
                  {state.map(el => <FilterListItem key={el} title={el} pickFilters={pickFilters}/>)}
              </S.FilterList>
          }
      </>
    ) 
}

export default FilterList