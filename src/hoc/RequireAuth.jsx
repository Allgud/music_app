import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function RequireAuth({children}) {
    const userLogin = useSelector(state => state.user.userLogin)
    
    if(!userLogin) {
        return <Navigate to={'/'} />
    }

    return children
}

export default RequireAuth