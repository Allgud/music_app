import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkIsUser, checkIsAuth } from "../../store/userSlice";
import { useTheme } from '../../hook/useTheme'
import AppRoutes from "../../router/routes";
import GStyles from "./global";

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkIsUser())
    dispatch(checkIsAuth())
  }, [])

  return (
    <>
      <GStyles theme={theme}/>
      <AppRoutes />
    </>   
  )
} 

   
export default App
