import React from "react";
import LoginForm from "../../components/auth-components/LoginForm";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.pass.value
        const userData = {email, password}
        dispatch(login(userData))
        navigate('/main', {replace: true})
    }

    return <LoginForm onSubmitClick={handleSubmit}/>
}

export default AuthPage