import React from 'react'
import CenterBlock from './center-block-components/CenterBlock'
import Nav from './nav-components/Nav'

function Main() {
    return (
        <main className="main">
            <Nav />
            <CenterBlock />
            <div className="main__sidebar sidebar"></div>
        </main>  
    )
}

export default Main