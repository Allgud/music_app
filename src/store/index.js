import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './trackSlice'
import userReducer from './userSlice'
import barReducer from './barSlice'

export default configureStore({
    reducer: {
        tracks: tracksReducer,
        user: userReducer,
        bar: barReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})