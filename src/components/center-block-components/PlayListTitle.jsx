import React from "react";
import {HandySvg} from 'handy-svg'
import watchSvg from '../../img/icon/watch.svg'

function PlayListTitle() {
    return (
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <HandySvg 
                    src={watchSvg}
                    className='playlist-title__svg'
                />
            </div>
        </div>
    )
}

export default PlayListTitle