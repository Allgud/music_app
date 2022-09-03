import React from "react";
import SidebarButton from "./SidebarButton";

import img1 from '../../img/playlist01.png'
import img2 from '../../img/playlist02.png'
import img3 from '../../img/playlist03.png'

const list = [
    {link: img1},
    {link: img2},
    {link: img3}
]

function SidebarBlock() {
    const imgList = list.map((elem, i) => {
        return <SidebarButton key={i + 1} img={elem} />
    })

    return (
        <div className="sidebar__block">
            <div className="sidebar__list">
                {imgList}
            </div>
        </div>
    )
}

export default SidebarBlock