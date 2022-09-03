import React from "react";
import PlayList from "./PlayList";
import PlayListTitle from "./PlayListTitle";

function CenterBlockContent() {
    return (
        <div className="centerblock__content">
            <PlayListTitle />
            <PlayList />
        </div>
    )
}

export default CenterBlockContent