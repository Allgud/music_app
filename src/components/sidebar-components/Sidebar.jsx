import React from "react";
import SidebarBlock from "./SidebarBlock";
import SidebarPersonal from "./SidebarPersonal";

function Sidebar() {
    return (
        <div className="main__sidebar sidebar">
            <SidebarPersonal />
            <SidebarBlock />
        </div>
    )
}

export default Sidebar