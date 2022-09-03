import React from 'react'
import FilterButtonsList from './FilterButtonsList'

function CenterBlockFilter() {
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <FilterButtonsList />
        </div>
    )
}

export default CenterBlockFilter