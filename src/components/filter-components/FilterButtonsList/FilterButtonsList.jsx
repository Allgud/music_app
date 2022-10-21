import React, {useState} from 'react'
import FilterButton from '../FilterButton'

const buttonsContent = [
    { id: 1, selector: 'button-author', content: 'исполнителю', isActive: false},
    { id: 2, selector: 'button-year', content: 'году выпуска', isActive: false},
    { id: 3, selector: 'button-genre', content: 'жанру', isActive: false}
]

function FilterButtonsList() {
    const [state, setState] = useState(buttonsContent)

    const handleClickedBtn = (btn) => {
        const newState = state.map(el => {
            return el.content === btn ? {...el, isActive: !el.isActive} : {...el, isActive: false} 
        })
        setState(newState)
    }

    return (
        <>
            {
                state.map((elem) => (
                    <FilterButton 
                        key={elem.id} 
                        content={elem.content} 
                        selector={elem.selector}
                        handleClick={handleClickedBtn}
                        active={elem.isActive}
                    />
                ))
            }
        </>
    )
}

export default FilterButtonsList