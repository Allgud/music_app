import React from 'react'
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import { AuthProvider } from '../hoc/AuthProvider'
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
=======
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
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5

export default AppRoutes