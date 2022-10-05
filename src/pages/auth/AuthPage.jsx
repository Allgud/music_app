import React from "react";
<<<<<<< HEAD
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
=======
import {useNavigate} from 'react-router-dom'
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../hook/useAuth";

function AuthPage() {
    const navigate = useNavigate()
    const {signin} = useAuth()

    const handleAuth = () => {
        signin(() => navigate('/tracks'))
    }

    return (
        <LoginForm handleAuth={handleAuth}/>
    )
}

>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
export default AuthPage