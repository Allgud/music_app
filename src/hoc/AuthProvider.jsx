import React, {useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false)

    const signin = (cb) => {
        setAuth(true)
        cb()
    }

<<<<<<< HEAD
    const value = {auth, signin}
=======
    const signout = (cb) => {
        setAuth(false)
        cb()
    }

    const value = {auth, signin, signout}
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}