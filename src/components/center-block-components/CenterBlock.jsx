import React from 'react'
import CenterBlockSearch from './CenterBlockSearch'
import CenterBlockFilter from './CenterBlockFilter'
import CenterBlockContent from './CenterBlockContent'

function CenterBlock() {
    return (
        <div className="main__centerblock centerblock">
            <CenterBlockSearch />
            <h2 className='centerblock__h2'>Треки</h2>
            <CenterBlockFilter />
            <CenterBlockContent />
        </div>
    )
}

export default CenterBlock