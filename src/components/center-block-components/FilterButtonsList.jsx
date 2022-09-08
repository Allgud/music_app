import React from 'react'
import FilterButton from './FilterButton'

const buttonsContent = [
    { selector: 'button-author', content: 'исполнителю', isActive: false},
    { selector: 'button-year', content: 'году выпуска', isActive: false},
    { selector: 'button-genre', content: 'жанру', isActive: false}
]

function FilterButtonsList() {

    const handleActiveBtn = (el) => {
        console.log(el);
    } 

    return (
        <>
            {
                buttonsContent.map((elem, i) => (
                    <FilterButton 
                        key={i + 1} 
                        content={elem.content} 
                        selector={elem.selector}
                        handleActive={handleActiveBtn}
                    />
                ))
            }
        </>
    )
}

export default FilterButtonsList