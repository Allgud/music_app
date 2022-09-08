import React from "react";

function FilterButton({ content, selector, handleActive }) {
    return (
        <div 
            className={`filter__button _btn-text ${selector}`}
            onClick={event => handleActive(event.target)}
        >
            {content}
        </div>
    )
}

export default FilterButton