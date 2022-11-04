import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function RequireAuth({children}) {
    const { isAuth } = useSelector(state => state.user)
    
    if(!isAuth) {
        return <Navigate to={'/auth'} />
    }

    return children
}

export default RequireAuth