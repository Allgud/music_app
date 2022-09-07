import React from "react";
import Track from "./Track";

const tracks = [
    {title: 'Guilt', author: 'Nero', album: 'Welcome Reality', year: '2020', time: '4:44', advInfo: ''},
    {title: 'Elektro', author: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', year: '2020', time: '2:22', advInfo: ''},
    {title: 'I’m Fire', author: 'Ali Bakgor', album: 'I’m Fire', year: '2020', time: '2:22', advInfo: ''},
    {title: 'Non Stop', author: 'Стоункат, Psychopath', album: 'Non Stop', year: '2020', time: '4:12', advInfo: ' (Remix)'},
    {title: 'Run Run', author: 'Jaded, Will Clarke, AR/CO', album: 'Run Run', year: '2020', time: '2:54', advInfo: ' (feat. AR/CO)'},
    {title: 'Eyes on Fire', author: 'Blue Foundation, Zeds Dead', album: 'Eyes on Fire', year: '2020', time: '5:20', advInfo: ' (Zeds Dead Remix)'},
    {title: 'Mucho Bien', author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile', album: 'Mucho Bien', year: '2020', time: '3:41', advInfo: ' (Hi Profile Remix)'},
    {title: 'Knives n Cherries', author: 'minthaze', album: 'Captivating', year: '2020', time: '1:48', advInfo: ''},
    {title: 'How Deep Is Your Love', author: 'Calvin Harris, Disciples', album: 'How Deep Is Your Love', year: '2020', time: '3:32', advInfo: ''},
    {title: 'Morena', author: 'Tom Boxer', album: 'Soundz Made in Romania', year: '2020', time: '3:36', advInfo: ''},
]

function PlayList() {
    const trackList = tracks.map((elem, i) => {
        return <Track key={i} track={elem} />
    })

    return (
        <div className="content__playlist playlist">
            {trackList}
        </div>
    )
}

export default PlayList