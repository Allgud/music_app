import React from "react";
import LoginForm from "../../components/auth-components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hook/useAuth'
import { useService } from "../../hook/useService";

const AuthPage = () => {
    const navigate = useNavigate()
    const { musicService } = useService()
    const { signin, handleAuth } = useAuth()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.pass.value
        const userData = JSON.stringify({email, password})
        musicService.checkSignUp(userData)
        .then(data => {
            if(data.non_field_errors) {
                handleAuth(false)
            }
            signin(data, () => navigate('/main', {replace: true}))
        })
    }

    return <LoginForm onSubmitClick={handleSubmit}/>
}

export default AuthPage