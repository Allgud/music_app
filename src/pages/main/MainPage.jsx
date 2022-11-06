import React from 'react'

import PlayList from '../../components/playlist-components/Playlist'
import CenterBlockFilter from '../../components/filter-components/CenterBlockFilter'

const MainPage = () => {
    return (
        <>
            <CenterBlockFilter />
            <PlayList />
        </>
    )
}

export default MainPage