import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import { AuthProvider } from '../providers/AuthProvider'
import RequireAuth from '../hoc/RequireAuth'
import AuthPage from '../pages/auth'
import CollectionsPage from '../pages/collections'
import MainPage from '../pages/main'
import NotFound from '../pages/not-found' 

const AppRoutes = () => (
    <AuthProvider>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path='auth' element={<AuthPage />} /> 
                <Route path='*' element={<NotFound />}/>
                <Route path='collections' element={
                    <RequireAuth>
                        <CollectionsPage />
                    </RequireAuth>
                } />
            </Route>
        </Routes>
    </AuthProvider>
)

export default AppRoutes