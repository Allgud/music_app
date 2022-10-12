import React from "react";
import { useTheme } from '../../hook/useTheme'
import { ServiceProvider } from "../../providers/ServiceProvider";
import AppRoutes from "../../router/routes";
import GStyles from "./global";

const App = () => {
  const { theme } = useTheme()

  return (
    <ServiceProvider>
      <GStyles theme={theme}/>
      <AppRoutes />
    </ServiceProvider>   
  )
} 

   
export default App
