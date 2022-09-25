import React from "react";
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
