import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './trackSlice'
import userReducer from './userSlice'

export default configureStore({
    reducer: {
        tracks: tracksReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})