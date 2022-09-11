import React, { useEffect, useState } from "react";
import Context from './context/context'
import Bar from "./Bar";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
      clearTimeout(timeout)
    }, 5000)
    setLoading(true)
  }, [])

  return (
    <Context.Provider value={loading}>
      <div className="wrapper">
        <div className="container">
          <Main />
          <Bar />
          <Footer />
        </div>
      </div>
    </Context.Provider> 
  )
}

export default App;
