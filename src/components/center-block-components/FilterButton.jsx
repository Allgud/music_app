import React from "react";

function FilterButton({ content, selector }) {
    return (
        <div className={`filter__button _btn-text ${selector}`}>{content}</div>
    )
}

export default FilterButton