import React, {useState, createContext} from 'react'

export const StatusContext = createContext()

export const StatusProvider = ({children}) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const onPlayClick = () => {
        setIsPlaying(true)
    }

    const onPauseClick = () => {
        setIsPlaying(false)
    }

    const value = {isPlaying, onPlayClick, onPauseClick}

    return (
        <StatusContext.Provider value={value}>
            {children}
        </StatusContext.Provider>
    )
}