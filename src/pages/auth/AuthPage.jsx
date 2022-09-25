import React from "react";
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

export default AuthPage