import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function RequireAuth({children}) {
    const auth = useSelector(state => state.user.auth)
    
    if(!auth) {
        return <Navigate to={'/auth'} />
    }

    return children
}

export default RequireAuth