import React from 'react'
import CenterBlockSearch from './CenterBlockSearch'
import CenterBlockFilter from './CenterBlockFilter'

function CenterBlock() {
    return (
        <div className="main__centerblock centerblock">
            <CenterBlockSearch />
            <h2 className='enterblock__h2'>Треки</h2>
            <CenterBlockFilter />
        </div>
    )
}

export default CenterBlock