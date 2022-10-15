import React, { useState, createContext } from "react";

export const HandleBarContext = createContext()

export const HandleBarProvider = ({children}) => {
    const [ showBar, setShowBar ] = useState(false)
    const [ currentTrack, setCurrentTrack ] = useState(null)

    const handleShowBar = (obj) => {
        setCurrentTrack(obj)
        setShowBar(true)
    }

    return (
        <HandleBarContext.Provider value={{showBar, currentTrack, handleShowBar}}>
            {children}
        </HandleBarContext.Provider>
    )
}

