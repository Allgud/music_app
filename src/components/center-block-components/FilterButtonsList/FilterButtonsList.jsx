import React, {useState} from 'react'
import FilterButton from '../FilterButton'

const buttonsContent = [
    { selector: 'button-author', content: 'исполнителю', isActive: false},
    { selector: 'button-year', content: 'году выпуска', isActive: false},
    { selector: 'button-genre', content: 'жанру', isActive: false}
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
                state.map((elem, i) => (
                    <FilterButton 
                        key={i + 1} 
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