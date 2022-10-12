import React, { useState, createContext } from 'react'
import MusicService from '../components/api-client'

export const ServiceContext = createContext()

export const ServiceProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const musicService = new MusicService()

    const toggleLoading = (boolean) => {
        setIsLoading(boolean)
    }

    return (
        <ServiceContext.Provider value={{musicService, isLoading, toggleLoading}}>
            {children}
        </ServiceContext.Provider>
    )
}