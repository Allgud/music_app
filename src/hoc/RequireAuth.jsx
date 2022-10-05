import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

function RequireAuth({children}) {
<<<<<<< HEAD
    const { auth } = useAuth()

    if(!auth) {
        return <Navigate to={'/auth'} />
=======
    const auth = useAuth()

    if(!auth) {
        return <Navigate to={'/'} />
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
    }

    return children
}

export default RequireAuth