import React, { useState, useEffect } from "react";
import Bar from '../../components/Bar'
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import {LoadingContext} from "../../components/context/context";

function MainPage() {
    const [loading, setLoading] = useState()

    useEffect(() => {
        const timeout = setTimeout(() => {
          setLoading(false)
          clearTimeout(timeout)
        }, 5000)
        setLoading(true)
      }, [])
    
    return (
        <LoadingContext.Provider value={loading}>
            <Main />
            <Bar />
            <Footer />
        </LoadingContext.Provider>
    )
}

export default MainPage