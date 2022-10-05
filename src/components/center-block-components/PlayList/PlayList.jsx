<<<<<<< HEAD:src/constants/constants.js
export const TRACKS = [
=======
import React, {useContext} from "react";
import { LoadingContext } from '../../context/context'
import Track from "../Track";
import TrackSceleton from "../TrackSkeleton";
import * as S from "./styles";

const tracks = [
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5:src/components/center-block-components/PlayList/PlayList.jsx
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

<<<<<<< HEAD:src/constants/constants.js
export const COLLECTIONS_ITEMS = ['Новинки недели', 'Топ-20 за месяц', 'Подкасты', 'Хиты всех времен', 'Медлячки', 'Музыка в дорогу']

const colors = ['#271A58', '#580EA2', '#9A48F1']

export const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

export const PAGES_TITLES = {
    '/': 'Треки',
    '/collections': "Мои подборки" 
}
=======
function PlayList() {
    const loading = useContext(LoadingContext)

    const skeletons = Array(tracks.length).fill("", 0, 10).map((_, i) => <TrackSceleton key={i}/>)
    const trackList = tracks.map((elem, i) => (<Track key={i} track={elem} />))
   
    return (
        <S.PlayList>
            {loading ? skeletons : trackList }
        </S.PlayList>
    )
}

export default PlayList
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5:src/components/center-block-components/PlayList/PlayList.jsx
