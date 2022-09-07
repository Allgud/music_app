import React from "react";

function SidebarButton({img}) {
    return (
        <div className="sidebar__item">
            <a href="#" className="sidebar__link">
                <img className="sidebar__img" src={img.link} alt="day's playlist" />
            </a>
        </div>
    )
}

export default SidebarButton