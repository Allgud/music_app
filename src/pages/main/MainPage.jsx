import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllTracks } from '../../store/trackSlice'
import PlayList from '../../components/playlist-components/Playlist'
import PlayListTitle from '../../components/playlist-components/PlayListTitle'
import CenterBlockFilter from '../../components/filter-components/CenterBlockFilter'

const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTracks())
    }, [])

    return (
        <>
            <CenterBlockFilter />
            <PlayListTitle />
            <PlayList />
        </>
    )
}

export default MainPage