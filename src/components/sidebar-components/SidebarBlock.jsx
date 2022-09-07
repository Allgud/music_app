import React from "react";
import SidebarButton from "./SidebarButton";

import img1 from '../../img/playlist01.png'
import img2 from '../../img/playlist02.png'
import img3 from '../../img/playlist03.png'

const list = [ img1, img2, img3 ]

function SidebarBlock() {

    return (
        <div className="sidebar__block">
            <div className="sidebar__list">
                {
                    list.map((elem, i) => {
                        return <SidebarButton key={i + 1} img={elem} />
                    })
                }
            </div>
        </div>
    )
}

export default SidebarBlock