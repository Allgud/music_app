import React from 'react'
import FilterButton from './FilterButton'

const buttonsContent = [
    { cls: 'button-author', content: 'исполнителю'},
    { cls: 'button-year', content: 'году выпуска'},
    { cls: 'button-genre', content: 'жанру'}
]

function FilterButtonsList() {
    const filterButtons = buttonsContent.map((elem, i) => <FilterButton key={i + 1} content={elem}/>)

    return (
        <>
            {filterButtons}
        </>
    )
}

export default FilterButtonsList