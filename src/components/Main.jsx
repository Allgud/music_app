import React from 'react'
import CenterBlock from './center-block-components/CenterBlock'
import Nav from './nav-components/Nav'
import Sidebar from './sidebar-components/Sidebar'

function Main() {
    return (
        <main className="main">
            <Nav />
            <CenterBlock />
            <Sidebar />
        </main>  
    )
}

export default Main