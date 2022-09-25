import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

function RequireAuth({children}) {
    const auth = useAuth()

    if(!auth) {
        return <Navigate to={'/'} />
    }

    return children
}

export default RequireAuth