import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import RequireAuth from '../hoc/RequireAuth'
import AuthPage from '../pages/auth'
import CollectionsPage from '../pages/collections'
import MainPage from '../pages/main'
import NotFound from '../pages/not-found' 
import { HandleBarProvider } from '../providers/HandleBarProvider'

const AppRoutes = () => (
    <HandleBarProvider>
        <Routes>
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path='collections' element={
                    <RequireAuth>
                        <CollectionsPage />
                    </RequireAuth>
                }/>
                <Route path='*' element={<NotFound />} />
            </Route> 
        </Routes>
    </HandleBarProvider>
)

export default AppRoutes