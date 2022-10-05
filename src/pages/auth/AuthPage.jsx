import React from "react";
import LoginForm from "../../components/auth-components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hook/useAuth'

const AuthPage = () => {
    const naigate = useNavigate()
    const { signin } = useAuth()

    const handleAuth = (event) => {
        event.preventDefault()
        const form = event.target
        const login = form.login.value
        const password = form.pass.value
        const userData = JSON.stringify({login, password})
        localStorage.setItem('user', userData)
        signin(() => naigate('/'))
    }

    return <LoginForm handleAuth={handleAuth}/>
}

export default AuthPage