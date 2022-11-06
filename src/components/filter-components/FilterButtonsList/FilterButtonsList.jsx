import React, {useState} from 'react'
import FilterButton from '../FilterButton'
import { FILTER_BUTTONS } from '../../../constants/constants'

function FilterButtonsList() {
    const [state, setState] = useState(FILTER_BUTTONS)

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