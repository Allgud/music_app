import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from '../pages/main'
import AuthPage from '../pages/auth'
import NotFound from '../pages/not-found'
import RequireAuth from '../hoc/RequireAuth'
import { AuthProvider } from '../hoc/AuthProvider'

function AppRoutes() {
    return (
        <AuthProvider>
            <Routes>
                <Route index element={<AuthPage />} />
                <Route path='/tracks' element={
                    <RequireAuth>
                        <MainPage />
                    </RequireAuth>
                } />
                <Route path='*' element={<NotFound />} /> 
            </Routes>
        </AuthProvider>
    )
}

export default AppRoutes