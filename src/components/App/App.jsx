import React from "react";
<<<<<<< HEAD
import AppRoutes from "../../router/routes";
import GStyles from "./global";

const App = () => (
    <>
      <GStyles />
      <AppRoutes />
    </>   
)
   
export default App
=======
import GStyles from "./global";
import Layout from "../Layout";
import AppRoutes from "../../router/routes";

function App() {

  return (
    <>
      <GStyles />
      <Layout>
        <AppRoutes />
      </Layout>
    </>   
  )
}

export default App;
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
