import React from "react";
import { ThemeProvider } from "../../hoc/ThemeProvider";
import { useTheme } from '../../hook/useTheme' 
import AppRoutes from "../../router/routes";
import GStyles from "./global";

const App = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider>
      <GStyles theme={theme}/>
      <AppRoutes />
    </ThemeProvider>   
  )
} 

   
export default App
