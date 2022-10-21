import React, { useState, useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTracks } from '../store/trackSlice'

export const TracksContext = createContext()

const TracksProvider = ({children}) => {
    const tracks = useSelector(state => state.tracks.tracks)
    const searchTracks = useSelector(state => state.tracks.searchValue)
    const [ currentTracks, setCurrentTracks ] = useState(tracks)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getAllTracks()) 
    }, [])

    useEffect(() => {
        setCurrentTracks(tracks.filter(el => el.name.toLowerCase().match(searchTracks)))
    }, [searchTracks])

    const value = {currentTracks}

    return (
        <TracksContext.Provider value={value}>
            {children}
        </TracksContext.Provider>
    )
}

export default TracksProvider