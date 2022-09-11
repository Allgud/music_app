import React from "react";

function FilterByYear({buttons}) {
    const [moreNew, moreOld] = buttons

    return (
        <div className="filter__list--year">
            <div className="filter__items--year">
            <div className="filter__item--year item__newest">
                <input type="radio" name="year" value={moreNew} id='more-new'/>
                <label htmlFor="more-new">{moreNew}</label>
            </div>
            <div className="filter__item--year item__oldest" >
                <input type="radio" name="year" value={moreOld} id='more-old' />
                <label htmlFor="more-old">{moreOld}</label>
            </div>
        </div>
        </div>  
    )
}

export default FilterByYear