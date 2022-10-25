import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../../hook/useTheme'
import { getUsername } from "../../store/userSlice";
import AppRoutes from "../../router/routes";
import GStyles from "./global";

const App = () => {
  const { theme } = useTheme()
  const isUser = useSelector(state => state.user.isUser)
  const auth = useSelector(state => state.user.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getUsername())
  }, [])

  useEffect(() => {
    if(!isUser || !auth) {
      navigate('/auth')
    }
  }, [dispatch])

  return (
    <>
      <GStyles theme={theme}/>
      <AppRoutes />
    </>   
  )
} 

   
export default App
