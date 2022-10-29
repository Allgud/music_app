import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import RequireAuth from '../hoc/RequireAuth'
import AuthPage from '../pages/auth'
import CollectionsPage from '../pages/collections'
import MainPage from '../pages/main'
import NotFound from '../pages/not-found' 

const AppRoutes = () => (
    <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/' element={<Layout />}>
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
            <Route path='*' element={<NotFound />} />
        </Route> 
    </Routes>
)

export default AppRoutes