import React, { useEffect } from "react";
import LoginForm from "../../components/auth-components/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const isUser = useSelector(state => state.user.isUser)
    const auth = useSelector(state => state.user.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const userLogin = form.login?.value
        const email = form.email.value
        const password = form.pass.value
        if(userLogin) {
            dispatch(signup({userLogin, email, password}))
            return
        }
        if(!userLogin && isUser) {
            dispatch(login({email, password}))
        }   
    }
    
    useEffect(() => {
        if(auth) {
            navigate('/', {replace: true})
        }
    }, [auth])

    return <LoginForm onSubmitClick={handleSubmit} />
}

export default AuthPage