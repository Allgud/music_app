import React from 'react'
import FilterButton from './FilterButton'

const buttonsContent = [
    { selector: 'button-author', content: 'исполнителю'},
    { selector: 'button-year', content: 'году выпуска'},
    { selector: 'button-genre', content: 'жанру'}
]

function FilterButtonsList() {

    return (
        <>
            {
                buttonsContent.map((elem, i) => (
                    <FilterButton 
                        key={i + 1} 
                        content={elem.content} 
                        selector={elem.selector}
                    />
                ))
            }
        </>
    )
}

export default FilterButtonsList