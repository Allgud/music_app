import React, {useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false)

    const signin = (cb) => {
        setAuth(true)
        cb()
    }

    const signout = (cb) => {
        setAuth(false)
        cb()
    }

    const value = {auth, signin, signout}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}