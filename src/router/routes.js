import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import { AuthProvider } from '../providers/AuthProvider'
import RequireAuth from '../hoc/RequireAuth'
import AuthPage from '../pages/auth'
import CollectionsPage from '../pages/collections'
import MainPage from '../pages/main'
import NotFound from '../pages/not-found' 
import { HandleBarProvider } from '../providers/HandleBarProvider'

const AppRoutes = () => (
    <AuthProvider>
        <HandleBarProvider>
            <Routes>
                <Route path='/' element={<AuthPage />} />
                <Route path='/main' element={<Layout />}>
                    <Route index element={
                        <RequireAuth>
                            <MainPage />
                        </RequireAuth>
                    } />
                    <Route path='collections' element={
                        <RequireAuth>
                            <CollectionsPage />
                        </RequireAuth>
                    }/>
                    <Route path='*' element={
                        <RequireAuth>
                            <NotFound />
                        </RequireAuth>
                    } />
                </Route> 
            </Routes>
        </HandleBarProvider>
    </AuthProvider>
)

export default AppRoutes