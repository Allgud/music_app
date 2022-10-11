import React from "react";
import { useTheme } from '../../hook/useTheme' 
import AppRoutes from "../../router/routes";
import GStyles from "./global";

const App = () => {
  const { theme } = useTheme()
  
  return (
    <>
      <GStyles theme={theme}/>
      <AppRoutes />
    </>   
  )
} 

   
export default App
