import React, { useState, useEffect, createContext } from "react";
import { useSelector} from "react-redux";


export const TracksContext = createContext()

const TracksProvider = ({children}) => {
    const tracks = useSelector(state => state.tracks.tracks)
    const searchTracks = useSelector(state => state.tracks.searchValue)
    const [ currentTracks, setCurrentTracks ] = useState(tracks)

    const getChoosenTracks = (arr, activeSelector) => {
        if(activeSelector === 'year') {
            const filter = arr.join('')
            const sorted = [...tracks].sort((a, b) => new Date(a.release_date) - new Date(b.release_date))

            if(filter === 'Более новые'){
                setCurrentTracks(sorted.reverse())
               
                return
            }

            if(filter === 'Более старые'){
                setCurrentTracks(sorted)
                
                return
            } 
        }
        
        const result = []
        arr.forEach(el => {
            result.push(...tracks.filter(track => track[activeSelector] === el));
        })
        if(result.length !== 0) {
            setCurrentTracks(result)
        }
        return
    }



    useEffect(() => {
        setCurrentTracks(tracks.filter(el => el.name.toLowerCase().match(searchTracks)))
    }, [searchTracks])

    const value = {currentTracks, getChoosenTracks}

    return (
        <TracksContext.Provider value={value}>
            {children}
        </TracksContext.Provider>
    )
}

export default TracksProvider