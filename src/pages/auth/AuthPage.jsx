import React, { useEffect } from "react";
import LoginForm from "../../components/auth-components/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const auth = useSelector(state => state.user.isAuth)
    const navigate = useNavigate()
    
    useEffect(() => {
        if(auth) {
            navigate('/', {replace: true})
        }
    }, [auth])

    return <LoginForm />
}

export default AuthPage