import React, {useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(true)
    const [user, setUser] = useState(null)

    const signin = (newUser, cb) => {
        setAuth(false)
        setUser(newUser)
        cb()
    }

    const handleAuth = (boolean) => {
        setAuth(boolean)
    }
    
    const value = {user, auth, signin, handleAuth}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}