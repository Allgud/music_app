import React from "react";

function Burger({handleView}) {

    return (
        <div 
            className="nav__burger burger"
            onClick={handleView}
        >
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
    )
}

export default Burger