import React from "react";
import Bar from "./Bar";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return ( 
    <div className="wrapper">
      <div className="container">
        <Main />
        <Bar />
        <Footer />
      </div>
    </div> 
  )
}

export default App;
