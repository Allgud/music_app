import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from '../pages/main'
import AuthPage from '../pages/auth'
import NotFound from '../pages/not-found'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='*' element={<NotFound />} /> 
        </Routes>
    )
}

export default AppRoutes