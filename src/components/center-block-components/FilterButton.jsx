import React from "react";

function FilterButton({ content }) {
    return (
        <div className={"filter__button _btn-text" + content.cls}>{content.content}</div>
    )
}

export default FilterButton