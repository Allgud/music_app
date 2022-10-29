import React, {useState, createContext} from 'react'

export const StatusContext = createContext()

export const StatusProvider = ({children}) => {
    const [ onRepeat, setOnRepeat ] = useState(false)

    const onRepeatClick = () => {
        setOnRepeat(prev => !prev)
    }

    const value = { onRepeat, onRepeatClick }

    return (
        <StatusContext.Provider value={value}>
            {children}
        </StatusContext.Provider>
    )
}