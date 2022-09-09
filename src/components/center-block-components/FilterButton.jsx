import React from "react";

function FilterButton({ content, selector, handleClick, active}) {
    const activeButton = 'filter__button--active'
    const baseCls = `filter__button _btn-text ${selector}`
    
    return (
        <div
            className={active ? baseCls + ' ' + activeButton : baseCls} 
            onClick={event => handleClick(event.target)}
        >
            {content}
        </div>
    )
}

export default FilterButton