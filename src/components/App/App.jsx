import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkIsUser } from "../../store/userSlice";
import { useTheme } from '../../hook/useTheme'
import AppRoutes from "../../router/routes";
import GStyles from "./global";

const App = () => {
  const { isAuth } = useSelector(state => state.user)
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(checkIsUser())
    if(isAuth) {
      navigate('/')
    }
    navigate('/auth')
  }, [])
  
  return (
    <>
      <GStyles theme={theme}/>
      <AppRoutes />
    </>   
  )
} 

   
export default App
