<<<<<<< HEAD
import React from 'react'

import PlayList from '../../components/playlist-components/Playlist'
import CenterBlockFilter from '../../components/filter-components/CenterBlockFilter'

const MainPage = () => (
    <>
        <CenterBlockFilter />
        <PlayList />
    </>
)
=======
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
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5

export default MainPage